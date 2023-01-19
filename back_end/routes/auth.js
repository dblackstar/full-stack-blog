const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');






// -----------  REGISTER
router.post("/register", async (req, res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email   : req.body.email,
            password: hashedPass,
        })

        const user = await newUser.save();
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
});






// -----------  LOGIN
router.post("/login", async (req, res)=>{
    
    try{
        const findUser = await User.findOne({
            username:req.body.username,
        })

        // if no user (with this particular username) => is found
        if(!findUser){
            res.status(400).json("Wrong credentials !");
        } 
        
        // else if we find a user 
        // we compare the passwprd
        const validated = await bcrypt.compare(req.body.password, findUser.password);
        if(!validated){
            res.status(400).json("Wrong credentials !");
        } 
        
        // Send the response
        const {password, ...others} = findUser._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500);
    }
});





module.exports = router;