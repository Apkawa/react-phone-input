import _ from 'lodash'
import React from 'react'
import PhoneInput from 'react-phone-input/lib/formsy'
import { Form } from 'formsy-react'

export default class Page extends React.Component {
  state = {
    model: null,
    valid: false
  }

  render () {
    const {model} = this.state
    return (
      <div className="container">
        <Form onValidSubmit={(model) => this.setState({model})}
              onInvalid={() => this.setState({valid: false})}
              onValid={() => this.setState({valid: true})}
        >
          <PhoneInput defaultCountry={'ru'}
                      name="phone"
                      key="phone"
                      validations="phone"
          />
          <PhoneInput defaultCountry={'ru'}
                      name="phone_2"
                      value="+79999999999"
                      key="phone_2"
                      required

          />
          <button disabled={!this.state.valid} type="submit">Submit</button>
          <div>
            {_.map(model, (v, k) => <p><strong>{k}</strong>: {v}</p>)}
          </div>
        </Form>
      </div>
    )
  }
}

