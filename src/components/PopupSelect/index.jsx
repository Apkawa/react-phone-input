'use strict'
import Immutable from 'immutable'

import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { MuiPanel } from '../mui'

import './style.scss'

export class PopupSelect extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    renderOption: PropTypes.func,
    renderOptionLabel: PropTypes.func,
    renderField: PropTypes.func,
    defaultValue: PropTypes.any,
    disabled: PropTypes.disabled,
    readOnly: PropTypes.readonly,
    onPopupOpened: PropTypes.func,
    onPopupClosed: PropTypes.func
  }

  static defaultProps = {
    defaultValue: 'ru'
  }
  options_map = Immutable.Map(
    Immutable.fromJS(this.props.options)
             .reduce((result, item) => {
               result[item.get('value')] = item
               return result
             }, {})
  )

  state = {
    show_popup: false,
    value: this.props.value || this.props.defaultValue,
    checked_value: this.props.value || this.props.defaultValue,
    checked_option: this.options_map.get(this.props.value || this.props.defaultValue)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.onChange(this.state.value)
    }
    if (prevState.show_popup !== this.state.show_popup) {
      if (this.state.show_popup &&  this.props.onPopupOpened) {
        this.props.onPopupOpened()
      } else {
        this.props.onPopupClosed && this.props.onPopupClosed()
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    const {value} = nextProps
    let checkedValue = value
    if (_.isUndefined(checkedValue)) {
      checkedValue = this.props.defaultValue
    }
    this.setState({
      value: checkedValue,
      checked_value: checkedValue,
      checked_option: this.options_map.get(checkedValue)
    })
  }

  onChange = (value) => {
    const {onChange} = this.props
    if (onChange) {
      let option = this.options_map.get(value)
      onChange(value, option && option.toJS())
    }
  }

  onCloseSelect = (e) => {
    if (e && e.target !== this.refs.overlay) {
      return
    }
    this.setState({show_popup: false})
  }

  onCancelSelect = (e) => {
    this.setState({checked_value: this.state.value})
    this.onCloseSelect()
  }

  onCompleteSelect = () => {
    this.setState({value: this.state.checked_value})
    this.onCloseSelect()
  }

  renderOptionLabel (option) {
    const {renderOptionLabel, ...props} = this.props
    if (renderOptionLabel) {
      return renderOptionLabel(option, props)
    }
    return option.label
  }

  renderOption (option, i) {
    const {renderOption, ...props} = this.props

    if (renderOption) {
      return renderOption(option, props)
    }
    return (
      <div key={i} className="mui-radio">
        <label>
          <input
            type="radio"
            name={props.name}
            value={option.value}
            defaultChecked={option.value === this.state.value}
            onChange={(e) => {
              this.setState({
                value: e.target.value,
                checked_value: e.target.value,
                checked_option: this.options_map.get(e.target.value)
              })
              this.onCloseSelect()
            }}

          />

          {this.renderOptionLabel(option)}

        </label>
      </div>
    )
  }

  renderOptions () {
    const {options} = this.props
    if (!this.state.show_popup) {
      return null
    }
    return (
      <div className="select-wrap" onClick={this.onCloseSelect} ref="overlay">
        <div className="select-panel">
          <MuiPanel>
            <div className="select-content">
              {_.map(options, this.renderOption.bind(this))}
            </div>
          </MuiPanel>
        </div>
      </div>
    )
  }

  renderFieldLabel (option) {
    const {placeholder, renderFieldLabel} = this.props

    if (renderFieldLabel) {
      return renderFieldLabel(option, this.props)
    }
    if (!option) {
      if (placeholder) {
        return placeholder
      }
      return (
        'Выберите'
      )
    }

    return this.renderOptionLabel(option)
  }

  getCheckedOption () {
    const {value} = this.state
    let checkedValue = value
    if (_.isUndefined(checkedValue)) {
      checkedValue = this.props.defaultValue
    }

    let checked_option = this.options_map.get(checkedValue)
    if (checked_option) {
      checked_option = checked_option.toJS()
    }
    return checked_option
  }

  renderField () {
    const {renderField, placeholder, disabled, readOnly} = this.props

    const checked_option = this.getCheckedOption()

    const onClick = () => {
      if (!disabled) {
        this.setState({show_popup: !disabled})
      }
    }
    if (renderField) {
      return renderField(checked_option, {onClick, placeholder})
    }
    return (
      <div className="select-field" onClick={onClick}>
        {this.renderFieldLabel(checked_option)}
      </div>
    )
  }

  render () {
    const {value} = this.state

    return (
      <div className="material-select">
        <input type="hidden" value={value}/>
        {this.renderField()}
        {this.renderOptions()}
      </div>
    )
  }
}


