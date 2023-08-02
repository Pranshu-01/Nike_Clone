const router=require('express').Router();
const dotenv=require('dotenv');
dotenv.config();

const KEY=process.env.STRIPE_KEY;

const stripe=require("stripe")(KEY);




router.post("/payment",(req,res)=>{
    
    const paymentMethod=stripe.paymentMethods.create({
        type: 'card',
        card: {
          token: req.body.token,
        },
      });
    stripe.paymentIntents.create(
        {
            amount:req.body.amount,
            currency:"INR",
            payment_method: paymentMethod.id,
        },
        (stripeErr,stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr);
            }
            else{
                res.status(200).json(stripeRes);
            }
        }
    )
})


module.exports=router;