import Stripe from 'stripe';

const stripeKey = process.env.STRIPE_SECRET_KEY as string;
export const stripe = new Stripe(stripeKey, {
  apiVersion: '2024-09-30.acacia',
  typescript: true,
});
