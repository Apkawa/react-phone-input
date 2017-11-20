'use strict'
import Formsy, { HOC } from 'formsy-react'
import React, { Component, PropTypes } from 'react'

import { isValidNumber, PhoneInput as MuiPhoneInput } from '../components/PhoneInput'

import BaseFormsyComponent from './BaseFormsyComponent'

Formsy.addValidationRule('phone', (values, value) => {
  return isValidNumber(value)
})

// FIXME допилить обработку ошибок formsy
export class PhoneInput extends BaseFormsyComponent {
  static propTypes = {
    defaultFromSim: PropTypes.func
  }

  static defaultProps = {
    validations: 'phone'
  }

  validationError = 'Неправильный номер телефона'

  state = {
    simPhone: undefined,
    simCountry: undefined
  }

  componentDidMount () {
    if (_.isFunction(this.props.defaultFromSim)) {
      this.props.defaultFromSim()
          .then(({phoneNumber, countryCode}) => {
            this.setValue(phoneNumber)
            this.setState({simPhone: phoneNumber, simCountry: countryCode})
          })
    }
  }

  onChangeValue = (value) => {
    this.setValue(value)
  }

  renderErrorMessage () {
    const errorMessage = this.props.getErrorMessage()
    if (!errorMessage) {
      return null
    }
    // FIXME добавить стандартный стиль для ошибки
    return (
      <span className="error">{errorMessage}</span>
    )
  }

  validate () {
    return isValidNumber(this.getValue())
  }

  render () {
    const {...cleanedProps} = this.getCleanedProps()
    return (
      <div>
        <MuiPhoneInput {...cleanedProps}
                       value={this.getValue()}
                       onChange={this.onChangeValue}/>
        {this.renderErrorMessage()}
      </div>
    )
  }
}

export default HOC(PhoneInput)
