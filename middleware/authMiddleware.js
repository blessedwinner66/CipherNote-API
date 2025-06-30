const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
require('dotenv').config()

const requireAuth = async(req,res,next)=>{
    const token = req.cookies.jwt
     if(!token) return res.status(401).json({error:"Access denied!!"})
        try{
            const decodedToken = jwt.verify(token,process.env.SECRETKEY)
            req.user = await User.findById(decodedToken.id)
            if(!req.user) throw new Error()
            next()
        }
        catch(e){
            return res.status(401).json({error:"Invalid token!!"})
        }

   
}

module.exports = requireAuth