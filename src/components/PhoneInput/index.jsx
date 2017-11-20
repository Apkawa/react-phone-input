'use strict'
import _ from 'lodash'

import React from 'react'
import PropTypes from 'prop-types'

import { PhoneNumberFormat as PNF, PhoneNumberUtil } from 'google-libphonenumber'
import { MaskInput } from '../MaskInput'

import { COUNTRIES_CODE2ISO_MAP, COUNTRIES_MAP, CountrySelect } from './CountrySelect'

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

export class PhoneInput extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    onValidChange: PropTypes.func,
    onInvalid: PropTypes.func,
    value: PropTypes.string,
    defaultCountry: PropTypes.string,
    country: PropTypes.string,
    invalid: PropTypes.bool,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    showMask: PropTypes.bool
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
    invalidState: this.props.invalid
  }

  componentDidUpdate (prevProps, prevState) {
    const {onChange, onValidChange} = this.props
    const {value, isValid} = this.state
    if (prevState.value !== value) {
      const cleanedValue = isValid ? this.getFullNumber(value) : null
      const state = {
        cleanedValue,
        value,
        number: this.getNumber(value),
        isValid

      }
      if (_.isFunction(onChange)) {
        onChange(state.number, state)
      }
      if (_.isFunction(onValidChange)) {
        onValidChange(cleanedValue, state)
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    const {value, country} = nextProps
    let nextState
    if (value) {
      nextState = {
        value: this.formatValue(value),
        country: COUNTRIES_MAP[this.parseCountry(value)]
      }
    } else if (country) {
      nextState = {
        value: value,
        country: COUNTRIES_MAP[country]
      }
    }
    if (nextState) {
      this.setState(({}) => {
        return {
          ...nextState,
          isValid: this.isValidNumber(value, nextState.country),
          isEmpty: this.isEmpty(value)
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

  onCountrySelect = (value, {countryData}) => {
    const placeholder = phoneUtil.format(
      phoneUtil.getExampleNumber(countryData.iso2, false, PNF.MOBILE), PNF.MOBILE)
    const mask = this.placeholderToMask(placeholder)
    this.setState({country: countryData, placeholder, mask})
  }

  parseNumber (value, country) {
    const country_iso2 = _.get(country, 'iso2', this.props.defaultCountry)

    if (!value) {
      return value
    }
    try {
      // Try region value, as example 999 444-55-55
      if (country_iso2) {
        return phoneUtil.parseAndKeepRawInput(value, country_iso2)
      }
      // May be +7 ...
      return phoneUtil.parseAndKeepRawInput(value)
    } catch (ex) {
      // Try non called code 79995554433
      if (!_.startsWith(value, '+')) {
        value = '+' + value
      }
      try {
        return phoneUtil.parseAndKeepRawInput(value)
      } catch (ex) {
        return false
      }

    }
    return false
  }

  formatValue (value) {
    if (!value) {
      return ''
    }
    if (isValidNumber(value)) {
      value = phoneUtil.format(this.parseNumber(value), PNF.MOBILE)
    }
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
    this.setState(({country}) => {
      return {
        value,
        isValid: this.isValidNumber(value, country),
        isEmpty: this.isEmpty(value)
      }
    })
  }

  onInputBlur = (e) => {
    const {required, invalid, onInvalid} = this.props
    this.setState(({isEmpty, value, country}) => {
      const isValid = this.isValidNumber(value, country)
      const invalidState = invalid || (!isEmpty && !isValid) || (required && isEmpty)
      if (!isValid && _.isFunction(onInvalid)) {
        onInvalid({valid_number: false})
      }
      return {
        isValid: isValid,
        invalidState
      }
    })
  }

  renderMask () {
    const {defaultCountry, invalid, readOnly, disabled, label, showMask} = this.props
    // TODO Custom placeholder
    const {mask, placeholder, value, country, invalidState} = this.state

    const maskInputProps = {
      value,
      placeholder,
      mask,
      readOnly,
      disabled,
      maskChar: null
    }

    if (showMask) {
      maskInputProps.maskChar = '_'
    }

    return (
      <MaskInput
        {...maskInputProps}
        ref="input"
        type="tel"
        onChange={this.onChangeInput}
        label={label || 'Номер телефона'}
        floatingLabel={true}
        invalid={invalidState}
        onBlur={this.onInputBlur}
      />

    )
  }

  render () {
    const {defaultCountry, readOnly, disabled} = this.props
    // TODO Custom placeholder
    const {country} = this.state
    const country_iso2 = _.get(country, 'iso2')
    return (
      <div className="phone-input-group">
        <div className="phone-country">
          <CountrySelect
            defaultValue={defaultCountry}
            value={country_iso2}
            onChange={this.onCountrySelect}
            ref="select"
            disabled={disabled || readOnly}
          />
        </div>
        <div className="phone-input">
          {this.renderMask()}
        </div>
      </div>
    )

  }
}

export default PhoneInput

