import React from 'react'
import PhoneInput from '@apkawa/react-phone-input'
import '@apkawa/muicss/dist/css/mui.css'

export default class Page extends React.Component {
  state = {
    phoneValue: null,
    phoneCleanedValue: null,
  }

  render () {
    const {phoneValue, phoneCleanedValue} = this.state
    return (
      <div className="container">
        <PhoneInput defaultCountry={'ru'}
                    onChange={(phoneValue) => this.setState({phoneValue})}
                    onValidChange={(phoneCleanedValue) => this.setState({phoneCleanedValue})}
        />

        Value: {phoneValue} <br/>
        Cleaned value: {phoneCleanedValue}

      </div>
    )
  }
}


