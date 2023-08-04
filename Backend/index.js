const express=require('express');
const app=express();
const port=8080;
const authRoute=require('./routes/auth');
const productRoute=require('./routes/product');
const cartRoute=require('./routes/cart');
const favRoute=require('./routes/fav');
const stripeRoute=require('./routes/stripe');


const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const cors=require('cors');

app.use(cors({
    origin:'https://nikein.netlify.app/',  
}));

const dotenv=require('dotenv');
dotenv.config();

const mongoose=require('mongoose');
const seedDB = require('./seed');

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Database Connected Successfully');
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json());

app.use('/api/auth',authRoute);
app.use('/api/products',productRoute);
app.use('/api/fav',favRoute);
app.use('/api/cart',cartRoute);
app.use('/api/checkout',stripeRoute);


// seedDB();

app.listen(process.env.PORT || port,()=>{
    console.log(`Server Running at port ${port}`);
})