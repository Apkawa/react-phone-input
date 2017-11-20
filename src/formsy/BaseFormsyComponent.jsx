'use strict'
import React, { PropTypes, Component } from 'react'

const PROPS_FUNCTION = [
  'getValue',
  'setValue',
  'resetValue',
  'getErrorMessage',
  'getErrorMessages',
  'isValid',
  'isValidValue',
  'isRequired',
  'showRequired',
  'showError',
  'isPristine',
  'isFormDisabled',
  'isFormSubmitted'
]
const PROPS_ATTRIBUTE = [
  'validations',
  'validationError',
  'validationErrors',
  'validate',
  'formNoValidate'
]
const EXCLUDED_PROPS = [
  ...PROPS_FUNCTION,
  ...PROPS_ATTRIBUTE,
  'value',
  'required'
]

export default class BaseFormsyComponent extends Component {

  onChangeValue (event) {
    this.props.setValue(event.target.value)
  }

  cleanProps (props) {
    return _.omit(props, EXCLUDED_PROPS)
  }

  getCleanedProps () {
    return this.cleanProps(this.props)
  }

  getValue () {
    return this.props.getValue()
  }

  setValue () {
    return this.props.setValue(...arguments)

  }

  resetValue () {
    return this.props.resetValue(...arguments)

  }

  getErrorMessage () {
    return this.props.getErrorMessage(...arguments)

  }

  getErrorMessages () {
    return this.props.getErrorMessages(...arguments)

  }

  isValid () {
    return this.props.isValid(...arguments)

  }

  isValidValue () {
    return this.props.isValidValue(...arguments)

  }

  isRequired () {
    return this.props.isRequired(...arguments)

  }

  showRequired () {
    return this.props.showRequired(...arguments)

  }

  showError () {
    return this.props.showError(...arguments)

  }

  isPristine () {
    return this.props.isPristine(...arguments)

  }

  isFormDisabled () {
    return this.props.isFormDisabled(...arguments)

  }

  isFormSubmitted () {
    return this.props.isFormSubmitted()
  }

}

