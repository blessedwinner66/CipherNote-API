const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
require("dotenv").config()

const handleExisting = async(user_email)=>{
      const existingUser = await User.findOne({email:user_email})
        if(existingUser){
            throw new Error("The user already exists")
        }
}

module.exports.sign_up_post = async(req,res)=>{
     const{username,email,password} = req.body
    try{
       await handleExisting(email)
       const user = await User.create({username,email,password})
       const token = await jwt.sign({id:user._id},process.env.SECRETKEY,{expiresIn:"1d"})
       res.cookie("jwt",token,{maxAge:24*60*60*1000,httpOnly:true});
       res.status(201).json({user,token})
       
    }
    catch(e){
        res.status(400).json({Error:e.message})
        console.log(e)
    }
}

module.exports.log_in_post = async(req,res)=>{
     const{email,password} = req.body
    try{
       const user = await User.login(email,password)
        const token = await jwt.sign({id:user._id},process.env.SECRETKEY,{expiresIn:"1d"})
       res.cookie("jwt",token,{maxAge:24*60*60*1000,httpOnly:true});
       res.status(200).json({user,token})
       }
    catch(e){
        res.status(400).json({Error:e.message})
        console.log(e)
    }
}