import { loadStripe } from '@stripe/stripe-js'

let stripePromise : any;

const getStripe = () => {
    if(!stripePromise){
        stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY!)
    }

    return stripePromise
}

export default getStripe