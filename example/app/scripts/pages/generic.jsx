import React from 'react'
import {OrderCalculator, StuffCalculator} from 'u24-calculator'
import {buildMobXComponent} from 'u24-calculator/OrderCalculator'
import {AdminOrderServiceCalculator, AdminServiceCalculator} from 'u24-calculator/uds'
import {CountdownTimer, Mui, Radio} from 'u24-calculator/components'

export default () => (
  <div className="container">
    <OrderCalculator
      service_id={12}
      lang={window.LANG}

      getConfirmData={(data) => ({
        ...data,
        success_url: 'u24://payment/success/',
        failure_url: 'u24://payment/failure/'
      })}
    />
    {}
  </div>
)

/*$(() => {

  render(document.getElementById('confirmation'), ,
    {
      variant_id: 7776
    })

  render(document.getElementById('sms'), buildMobXComponent(CheckSMSStage),
    {
      confirmData: {phone: '+79213093987'},
      fakeSendSMS: true
    })

  render(document.getElementById('success'), (props) => (
      <div>
        <SuccessStage number="FAKE123" user_created={false}/>
        <SuccessStage number="FAKE123" user_created={true}/>
        <SuccessStage number="FAKE123" user_created={true} payment_url="u24://test"/>

      </div>
    ),
    {
      number: 'FAKE123',
      user_created: false
    })
  // render(document.getElementById('admin_order_calculator'), AdminOrderServiceCalculator,
  //   {
  //     'service_id': 3099
  //   })
})*/
