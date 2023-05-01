import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const PPK = 'AdcC9Eb2i9hywKfmmCugewhFpryqyTP9ZkqGjqV8LFcmvqco3VdcFsd98J_vtikdm5qH15Fui0r8u6nM'

function PaypalButton({ value }) {
  return (
    <PayPalScriptProvider options={{ 'client-id': PPK }}>
      <PayPalButtons
        style={{ layout: 'vertical' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: value,
                },
              },
            ],
          })
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name
            alert(`Transaction completed by ${name}`)
          })
        }}
      />
    </PayPalScriptProvider>
  )
}

export default PaypalButton
