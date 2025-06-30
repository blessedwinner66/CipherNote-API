const Note = require('../models/note.model')

module.exports.createNote = async(req,res)=>{
     const {title,content} = req.body
     try{
       const note = await Note.create({title,content,owner:req.user._id})
       res.status(200).json(note)
     }
   catch(e){
      res.status(400).json({Error:e.message})
      console.log(e)
   }
}