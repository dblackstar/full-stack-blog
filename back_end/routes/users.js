const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');






// -----------  UPDATE
router.put("/:id", async (req, res)=>{

    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        
        }
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,

            }, {new:true});

            // Send the response
            const {password, ...others} = updatedUser._doc;
            res.status(200).json(others);

        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("Permission denied")
    }
    
});









// -----------  DELETE
router.delete("/:id", async (req, res)=>{

    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id);
            
            if(!user){
                res.status(401).json("User not found !");
            }

            try{
                await User.findByIdAndDelete(req.params.id)
                // Send the response
                res.status(200).json("User has been deleted");
    
            }catch(err){
                res.status(500).json(err);
            }

            // the user donc existe
        }catch(err){
            res.status(500).json(err);
        }
        
    }else{
        res.status(401).json("Permission denied");
    }

    
});



// -----------  GET 
router.get("/:id", async (req, res)=>{

        try{
            const user = await User.findById(req.params.id);
            const {password, ...others} = user._doc;
            res.status(200).json(others);
        }catch(err){
            res.status(500).json(err);
        }
        
    
});





module.exports = router;