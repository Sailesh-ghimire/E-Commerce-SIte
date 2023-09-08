import React from 'react'
import KhaltiCheckout from "khalti-checkout-web";
import config from './KhaltiConfig'

export default function Khalti() {
    let checkout = new KhaltiCheckout(config);
  return (
    <div className=' h-full'>
      <h2>Khalti Integration</h2>
        <button className=' bg-purple-600 p-3 text-white cursor-pointer font-bold border-white border-2'
        onClick={() => checkout.show({amount: 1000})}>
          Pay via Khalti
        </button>
    </div>
  )
}
