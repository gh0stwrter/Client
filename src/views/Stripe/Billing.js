import React from 'react'
import env from 'envGetter'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm"
const stripePromise = loadStripe(env.stripe);



const Billing = () => {
    return (
        <Elements stripe={stripePromise}>
        <CheckoutForm />
        </Elements>
    )
}

export default Billing;