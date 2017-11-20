'use strict'
// import 'flag-icon-css/css/flag-icon.css'

import { PhoneNumberFormat as PNF, PhoneNumberUtil } from 'google-libphonenumber'
import React, { Component, PropTypes } from 'react'

import { PopupSelect } from '../PopupSelect'
import { MaskInput } from '../MaskInput'

import { getCountries } from './AllCountries'

import './style.scss'

const phoneUtil = PhoneNumberUtil.getInstance()

export function parseNumber (value) {
  value = value.toString()
  if (!_.startsWith(value, '+')) {
    value = '+' + value
  }
  return phoneUtil.parseAndKeepRawInput(value)
}

export function isValidNumber (value) {
  try {
    return phoneUtil.isValidNumber(parseNumber(value))
  } catch (ex) {
  }
  return false

}

const COUNTRIES = getCountries()
const COUNTRIES_MAP = _.fromPairs(_.map(COUNTRIES, (c) => [c.iso2, c]))
const COUNTRIES_CODE2ISO_MAP = _.fromPairs(_.map(COUNTRIES, (c) => [c.dialCode, c.iso2]))

class CountrySelect extends Component {
  static propTypes = {
    value: PropTypes.oneOf(_.keys(COUNTRIES_MAP)),
    defaultValue: PropTypes.oneOf(_.keys(COUNTRIES_MAP)),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    showCountryIcon: PropTypes.bool,
  }

  componentDidMount () {
    const { onChange, defaultValue, showCountryIcon } = this.props
    if (onChange && defaultValue && COUNTRIES_MAP[defaultValue]) {
      onChange(defaultValue, { countryData: COUNTRIES_MAP[defaultValue] })
    }
    if (showCountryIcon) {
      // TODO use lite png version
    }

  }

  getOptions () {
    return _.map(COUNTRIES, (countryData) => {
      return {
        value: countryData.iso2,
        label: countryData.name,
        countryData,
      }
    })
  }

  renderOptionLabel (option, props) {
    const { countryData } = option
    return (
      <span>
        <span className={`flag-icon flag-icon-${countryData.iso2}`}/>
        {option.label}
        <span className="dialCode">&nbsp; +{countryData.dialCode}</span>
      </span>
    )
  }

  renderFieldLabel (option, props) {
    return (
      <span>
        <span className={`flag-icon flag-icon-${option.countryData.iso2}`}/>
              +{option.countryData.dialCode}
        <div className="icon">
            <img src={require('./show-more.svg')}/>
        </div>
      </span>
    )
  }

  render () {
    const { onChange, defaultValue, value, disabled } = this.props
    return (
      <PopupSelect options={this.getOptions()}
                   renderOptionLabel={this.renderOptionLabel}
                   renderFieldLabel={this.renderFieldLabel}
                   name="dial_code"
                   value={value}
                   defaultValue={defaultValue}
                   onChange={onChange}
                   disabled={disabled}
      />
    )
  }
}

export class PhoneInput extends Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    defaultCountry: PropTypes.string,
    country: PropTypes.string,
    invalid: PropTypes.bool,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool,
  }
  initialValue = this.props.value || this.props.defaultValue
  hasCustomPlaceholder = !!this.props.placeholder

  phoneUtil = phoneUtil

  state = {
    value: this.formatValue(this.initialValue),
    isValid: false,
    isEmpty: !this.initialValue,
    country: COUNTRIES_MAP[this.parseCountry(this.initialValue) || this.props.defaultCountry],
    placeholder: this.props.placeholder,
    mask: null,
    invalidState: this.props.invalid,
  }

  componentDidUpdate (prevProps, prevState) {
    const { onChange } = this.props
    const { value, isValid } = this.state
    if (onChange && prevState.value != value) {
      onChange(isValid ? this.getFullNumber(value) : null)
    }
  }

  componentWillReceiveProps (nextProps) {
    const { value, country } = nextProps
    let nextState
    if (value) {
      nextState = {
        value: this.formatValue(value),
        country: COUNTRIES_MAP[this.parseCountry(value)],
      }
    } else if (country) {
      nextState = {
        value: value,
        country: COUNTRIES_MAP[country],
      }
    }
    if (nextState) {
      this.setState(({}) => {
        return {
          ...nextState,
          isValid: this.isValidNumber(value, nextState.country),
          isEmpty: this.isEmpty(value),
        }
      })
    }

  }

  placeholderToMask (placeholder, dialCode) {
    if (dialCode && !dialCode.startsWith('+')) {
      dialCode = `+${dialCode}`
    }
    let mask = _.trimStart(placeholder, dialCode).replace(/\d/g, 9)
    if (dialCode) {
      dialCode = dialCode.replace(/[9]/g, '\\9')
      return `${dialCode}${mask}`
    }
    return mask
  }

  onCountrySelect = (value, { countryData }) => {
    const placeholder = phoneUtil.format(
      phoneUtil.getExampleNumber(countryData.iso2, false, PNF.MOBILE), PNF.MOBILE)
    const mask = this.placeholderToMask(placeholder)
    this.setState({ country: countryData, placeholder, mask })
  }

  parseNumber (value, country) {
    const country_iso2 = _.get(country, 'iso2')

    if (!value) {
      return value
    }
    try {
      // Try region value, as example 999 444-55-55
      if (country_iso2) {
        // const regionCode = phoneUtil.getRegionCodeForCountryCode(country_iso2);
        return phoneUtil.parseAndKeepRawInput(value, country_iso2)
      }
      // May be +7 ...
      return phoneUtil.parseAndKeepRawInput(value)
    } catch (ex) {
      // Try non called code 79995554433
      if (!_.startsWith(value, '+')) {
        value = '+' + value
      }
      return phoneUtil.parseAndKeepRawInput(value)
    }
    return false
  }

  formatValue (value) {
    if (!value) {
      return ''
    }
    value = phoneUtil.format(this.parseNumber(value), PNF.MOBILE)
    return value || ''

  }

  parseCountry (value) {
    const number = this.parseNumber(value)
    if (!number) {
      return undefined
    }
    return COUNTRIES_CODE2ISO_MAP[number.getCountryCode()]
  }

  getNumber (value, country = null) {
    if (!country) {
      country = this.state.country
    }
    return `+${country.dialCode} ${value}`
  }

  getFullNumber (value, country = null) {
    return phoneUtil.format(this.parseNumber(this.getNumber(value, country)), PNF.E164)
  }

  isValidNumber (value, country = null) {
    try {
      return phoneUtil.isValidNumber(this.parseNumber(value, country))
    } catch (ex) {
    }
    return false
  }

  isEmpty (value) {
    return !value || !/\d/.test(value)
  }

  onChangeInput = (e) => {
    const value = e.target.value
    this.setState(({ country }) => {
      return {
        value,
        isValid: this.isValidNumber(value, country),
        isEmpty: this.isEmpty(value),
      }
    })
  }

  onInputBlur = (e) => {
    const { required, invalid } = this.props
    this.setState(({ isEmpty, value, country }) => {
      const isValid = this.isValidNumber(value, country)
      return {
        isValid: isValid,
        invalidState: invalid || (!isEmpty && !isValid) || (required && isEmpty),
      }
    })
  }

  render () {
    const { defaultCountry, invalid, readonly, disabled, label } = this.props
    // TODO Custom placeholder
    const { mask, placeholder, value, country, invalidState } = this.state
    const country_iso2 = _.get(country, 'iso2')
    const maskInputProps = {
      value,
      placeholder,
      mask,
      readonly,
      disabled,
    }
    return (
      <div className="phone-input-group">
        <div className="phone-country">
          <CountrySelect
            defaultValue={defaultCountry}
            value={country_iso2}
            onChange={this.onCountrySelect}
            ref="select"
            disabled={disabled || readonly}
          />
        </div>
        <div className="phone-input">
          <MaskInput
            {...maskInputProps}
            ref="input"
            type="tel"
            maskChar={null}
            onChange={this.onChangeInput}
            label={label || 'Номер телефона'}
            floatingLabel={true}
            invalid={invalidState}
            onBlur={this.onInputBlur}
          />
        </div>
      </div>
    )

  }
}

