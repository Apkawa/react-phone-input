'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { HOC, addValidationRule } from 'formsy-react'
import { isEmptyString, isExisty } from 'formsy-react/src/validationRules'

import { isValidNumber, PhoneInput as MuiPhoneInput } from '../components/PhoneInput'

import BaseFormsyComponent from './BaseFormsyComponent'

addValidationRule('phone', (values, value) => {
  console.log(values, value)
  return !isExisty(values, value) || isEmptyString(values, value) || isValidNumber(value)
})

export class PhoneInput extends BaseFormsyComponent {
  static propTypes = {
    defaultFromSim: PropTypes.func,
    renderError: PropTypes.func
  }

  validationPhoneMessage = 'Неправильный номер телефона'

  static defaultProps = {}

  static contextTypes = {
    formsy: PropTypes.object // What about required?
  }

  state = {
    value_state: null,
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

  _getErrorMessage () {
    return this.props.validationErrors.phone || this.validationPhoneMessage
  }

  onChangeValue = (value, state) => {
    this.setValue(value)
    this.setState(() => ({value_state: state}))
    if (!state.isValid && state.value) {
      this.context.formsy.updateInputsWithError({
        [this.props.name]: this._getErrorMessage()
      })
    }
  }

  renderErrorMessage () {
    let errorMessage = this.props.getErrorMessage()
    const {value_state} = this.state
    if (!errorMessage && value_state && value_state.value && !value_state.isValid) {
      errorMessage = this._getErrorMessage()
    }
    if (!errorMessage) {
      return null
    }
    if (_.isFunction(this.props.renderError)) {
      return this.props.renderError(errorMessage, this.props)
    }
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
                       onValidChange={this.onChangeValue}
        />
        {this.renderErrorMessage()}
      </div>
    )
  }
}

export default HOC(PhoneInput)
