const User = require('../model/userSchema');
const CryptoJS=require('crypto-js');
const jwt=require('jsonwebtoken');

const register = async (req, res) => {
	const newUser = new User({
		email: req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		isAdmin: req.body.isAdmin,
	});

	try {
		const savedUser = await newUser.save();
		res.status(200).json(savedUser);
	} catch (err) {
		res.status(500).json("It looks like you're already a Member.");
	}
};


const login=async(req,res)=>{
	try{
		const user=await User.findOne({email:req.body.email});

		!user && res.status(401).json("Wrong Credentials");

		const hashedPassword=CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const OriginalPassword=hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword!=req.body.password && res.status(401).json('Wrong Credentials');

		const accessToken=jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
        },process.env.JWT_SEC,{expiresIn:"3d"});

		const {password,...others}=user._doc;

        res.status(200).json({...others,accessToken});

	}
	catch(err){
		// res.status(500).json(err);
	}
}


module.exports = {
	register,
	login
};
