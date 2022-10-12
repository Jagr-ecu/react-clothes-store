require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//netlify works with functions as if they are API Endpoints
exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body);

        //se envia los datos del intent a stripe
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: "usd",
            payment_method_types: ["card"]
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        }
    } catch (error) {
        console.log({error});

        return {
            status: 400,
            body: JSON.stringify()
        }
    }
}
