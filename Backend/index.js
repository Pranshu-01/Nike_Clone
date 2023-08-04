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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Request-Headers', '*');
    if (req.method === "OPTIONS") {
      res.header('Access-Control-Allow-Methods', '*');
      return res.status(200).json({});
    }
    next();
  });


app.use(cors({
    origin:'*',
    credentials:"true",
    allowedHeaders: ['https://violet-fawn-robe.cyclic.app/api/','https://nikein.netlify.app/'],
    exposedHeaders: ['Content-Type']
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