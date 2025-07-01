const Note = require('../models/note.model')

module.exports.createNote = async(req,res)=>{
     const {title,content} = req.body
     try{
       const note = await Note.create({title,content,owner:req.user._id})
       res.status(201).json(note)
     }
   catch(e){
      res.status(400).json({Error:e.message})
      console.log(e)
   }
}

module.exports.viewNotes = async(req,res)=>{
  try{
    const note = await Note.find()
    res.status(200).json(note)
  }
   catch(e){
      res.status(400).json({Error:e.message})
      console.log(e)
   }
}

module.exports.findNote = async(req,res)=>{
  try{
    const {id} = req.params
    const note = await Note.findById(id,req.body,{new:true})
    res.status(200).json(note)
  }
  catch(e){
    res.status(400).json({Error:e.message})
      console.log(e)
  }
}

module.exports.updateNote = async(req,res)=>{
  try{
    const {id} = req.params
    const note = await Note.findByIdAndUpdate(id)
    res.status(200).json(note)
  }
  catch(e){
    res.status(400).json({Error:e.message})
    console.log(e)
  }
}

module.exports.deleteNote = async(req,res)=>{
  try{
    const {id} = req.params
    const note = await Note.findByIdAndDelete(id)
    res.status(200).json({message:"Notes deleted successfully"})
  }
  catch(e){
       res.status(400).json({Error:e.message})
      console.log(e)
  }
}