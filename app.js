const mongoose = require('mongoose')
const cookie = require('cookie-parser')
const express = require('express')
const app = express()
require('dotenv').config()
const authRoutes = require('./routes/auth.route')
const noteRoutes = require('./routes/note.route')
const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger/swaggerConfig')

app.use(express.json())
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))
app.use(cookie())
app.use(authRoutes)
app.use(noteRoutes)

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

mongoose.connect(process.env.DBURI)
.then(()=>console.log("Database connected successfully")).catch((e)=>console.log({Error:e.message}))

app.listen(process.env.PORT,()=>console.log(`App running on port ${process.env.PORT}`))

