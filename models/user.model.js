const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema(
    {
    username:{ type:String, required:true},
    email:{ type:String,unique:true, required:true},
    password:{ type:String, required:true}
   },
   {
    timestamps:true
   }
)

userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

userSchema.statics.login = async function(email,password){
    const existingUser = await this.findOne({email})
    if(existingUser){
        const authUser = await bcrypt.compare(password,existingUser.password)
        if(!authUser){
            throw new Error("The passwords do not match")
        }
    }else{
        throw new Error("The user does not exist")
    }
    return existingUser
}

const User = mongoose.model('User',userSchema)
module.exports = User