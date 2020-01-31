const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const user = require('./routes/api/user')

const app = express();

//Bodyparser Middleware

app.use(bodyParser.json())

app.use('/*', function(req,res,next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Credentials", "true"); res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT"); res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"); next(); })

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




