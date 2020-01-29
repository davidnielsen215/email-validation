const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const user = require('./routes/api/user')

const app = express();

//Bodyparser Middleware

app.use(bodyParser.json())

//DB config
const db = require('./config/keys').mongoURI

//Connect to MongoDb
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err))

//Use routes
app.use('/api/user', user)

    const port = process.env.Port || 5000

app.listen(port, () => console.log(`server started on ${port}`))




