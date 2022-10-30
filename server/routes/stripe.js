const stripe = require("stripe")(process.env.REACT_SECRET_KEY);
const router = require("express").Router();

router.post('/', async (req, res) => {
  try {
    const { cartItems } = req.body;
    const params = {
      mode: "payment",
      submit_type: "pay",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [
        { shipping_rate: "shr_1LwmRXK925rMwv331K6OzQ5v" },
        { shipping_rate: "shr_1LwmT2K925rMwv33F9YzJy74" },
      ],
      line_items: cartItems.map((item) => {
        return {
          price_data : {
            currency : "usd",
            product_data : {
              name : item.title,
              images : [item.images[0]]
            },
            unit_amount : item.price * 100,
          },
          adjustable_quantity : {
            enabled : true,
            minimum : 1
          },
          quantity : item.quantity
        }
      }),
      cancel_url: `http://localhost:5173/cancel`,
      success_url: `http://localhost:5173/success`,
    };
    
    const session = await stripe.checkout.sessions.create(params);
    res.json({session, status : 200})
  }catch(err){
    res.json({message : err.message, status : 400});
  }
    
});

module.exports = router
