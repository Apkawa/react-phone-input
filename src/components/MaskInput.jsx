'use strict'
import React, { Component} from 'react'
import PropTypes from 'prop-types';

// https://github.com/sanniassin/react-input-mask
import InputMask from 'react-input-mask'

import { MuiInput } from './mui'

export class MaskInput extends Component {
  renderInput (mask_props, props) {
    return <InputMask {...props} {...mask_props}/>
  }

  render () {
    const {mask, ...props} = this.props
    const maskProps = {
      mask
    }
    return <MuiInput
      {...props}
      renderInput={this.renderInput.bind(this, maskProps)}
      ref="mui_input"
    />
  }

}