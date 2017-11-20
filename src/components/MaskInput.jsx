'use strict'
import React, { PropTypes, Component } from 'react'
import Immutable, { Map } from 'immutable'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { MuiInput } from './mui/mui'

// https://github.com/sanniassin/react-input-mask
import InputMask from 'react-input-mask'

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