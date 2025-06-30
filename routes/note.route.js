const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/authMiddleware')
const noteController = require('../controllers/note.controller')

router.post('/notes/create',requireAuth,noteController.createNote)

module.exports = router