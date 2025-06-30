const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/authMiddleware')
const noteController = require('../controllers/note.controller')

router.post('/notes/create',requireAuth,noteController.createNote)
router.get('/notes',requireAuth,noteController.viewNotes)
router.get('/notes/:id',requireAuth,noteController.findNote)
router.put('/notes/:id',requireAuth,noteController.updateNote)
router.delete('/notes/:id',requireAuth,noteController.deleteNote)

module.exports = router