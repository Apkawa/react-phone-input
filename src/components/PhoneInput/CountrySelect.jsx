'use strict';
import { PhoneNumberUtil } from 'google-libphonenumber'
import PropTypes from 'prop-types'
import React from 'react'

import { PopupSelect } from '../PopupSelect'

import { getCountries } from './AllCountries'

export const COUNTRIES = getCountries()
export const COUNTRIES_MAP = _.fromPairs(_.map(COUNTRIES, (c) => [c.iso2, c]))
export const COUNTRIES_CODE2ISO_MAP = _.fromPairs(_.map(COUNTRIES, (c) => [c.dialCode, c.iso2]))

export class CountrySelect extends React.Component {
  static propTypes = {
    value: PropTypes.oneOf(_.keys(COUNTRIES_MAP)),
    defaultValue: PropTypes.oneOf(_.keys(COUNTRIES_MAP)),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    showCountryIcon: PropTypes.bool
  }

  componentDidMount () {
    const {onChange, defaultValue, showCountryIcon} = this.props
    if (onChange && defaultValue && COUNTRIES_MAP[defaultValue]) {
      onChange(defaultValue, {countryData: COUNTRIES_MAP[defaultValue]})
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
        countryData
      }
    })
  }

  renderOptionLabel (option, props) {
    const {countryData} = option
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
    const {onChange, defaultValue, value, disabled} = this.props
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


export default CountrySelect