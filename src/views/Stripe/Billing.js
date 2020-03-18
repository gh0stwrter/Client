import React, { useState, useEffect } from 'react'
import env from 'envGetter'
import {Elements, CardElement} from '@stripe/react-stripe-js';
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