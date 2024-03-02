const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000
let eventRoute = require('./routes/eventRoute')
let userRoute = require('./routes/userRoute')
let authRoute = require('./routes/authRoute')
const dbconnect = require('./dbConnect')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5500')
  res.header('Access-Control-Allow-Headers', 'content-type')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/events', eventRoute)
app.use('/users', userRoute)
app.use('/auth', authRoute)

try {app.listen(PORT, () =>
      console.log(`Ready to rock on http://localhost:${PORT}`)
    )} catch{(error) => {
    console.log(error);
  }};
app.use(express.json())