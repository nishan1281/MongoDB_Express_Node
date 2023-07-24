const User = require("../models/user.model");
const {v4: uuidv4} = require("uuid")

const getallusers = async (req, res)=>{
   try{
     const users = await User.find();
    res.status(200).json(users)
   } catch(e) {
    res.status(404).send (e.message);
   }
};

const creatUser = async (req, res)=>{
    try{
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number (req.body.age),
        })
    
        await newUser.save();
        res.status(201).json(newUser)
    }
    
    catch(error){
        res.status(500).send(error.message);
    }
};




module.exports = {getallusers, creatUser};