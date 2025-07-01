const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/authMiddleware')
const noteController = require('../controllers/note.controller')

/**
 * @swagger
 * /notes/create:
 *   post:
 *     summary: Create a new note (requires auth)
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: Grocery list
 *               content:
 *                 type: string
 *                 example: Milk, Eggs, Bread
 *     responses:
 *       201:
 *         description: Note created successfully
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized (missing or invalid token)
 */
router.post('/notes/create',requireAuth,noteController.createNote)

/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Get all personal notes (requires auth)
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 60a7b2f8d3e2c8b3a5a9c9a9
 *                   title:
 *                     type: string
 *                     example: Grocery list
 *                   content:
 *                     type: string
 *                     example: Milk, Eggs, Bread
 *       401:
 *         description: Unauthorized (missing or invalid token)
 */
router.get('/notes',requireAuth,noteController.viewNotes)

/**
 * @swagger
 * /notes/{id}:
 *   get:
 *     summary: Get a note by ID (requires auth)
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the note to retrieve
 *         required: true
 *         schema:
 *           type: string
 *           example: 60a7b2f8d3e2c8b3a5a9c9a9
 *     responses:
 *       200:
 *         description: Note object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 60a7b2f8d3e2c8b3a5a9c9a9
 *                 title:
 *                   type: string
 *                   example: Grocery list
 *                 content:
 *                   type: string
 *                   example: Milk, Eggs, Bread
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Note not found
 */
router.get('/notes/:id',requireAuth,noteController.findNote)

/**
 * @swagger
 * /notes/{id}:
 *   put:
 *     summary: Update a note by ID (requires auth)
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the note to update
 *         required: true
 *         schema:
 *           type: string
 *           example: 60a7b2f8d3e2c8b3a5a9c9a9
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated title
 *               content:
 *                 type: string
 *                 example: Updated content
 *     responses:
 *       200:
 *         description: Note updated successfully
 *       400:
 *         description: Invalid input data
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Note not found
 */
router.put('/notes/:id',requireAuth,noteController.updateNote)

/**
 * @swagger
 * /notes/{id}:
 *   delete:
 *     summary: Delete a note by ID (requires auth)
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the note to delete
 *         required: true
 *         schema:
 *           type: string
 *           example: 60a7b2f8d3e2c8b3a5a9c9a9
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Note not found
 */
router.delete('/notes/:id',requireAuth,noteController.deleteNote)

module.exports = router