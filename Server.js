const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
let eventRoute = require('./routes/eventRoute')
let userRoute = require('./routes/userRoute')
let authRoute = require('./routes/authRoute')
const dbconnect = require('./dbConnect')
app.use('/events', eventRoute)
app.use('/users', userRoute)
app.use('/auth', authRoute)
try {app.listen(PORT, () =>
      console.log(`Ready to rock on http://localhost:${PORT}`)
    )} catch{(error) => {
    console.log(error);
  }};
app.use(express.json())