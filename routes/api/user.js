const express = require('express')
const router = express.Router();


// User Model
const User = require('../../models/User')

// @router Get api/user
// @desc Get single user
// @access Public
router.post('/retrieve', (req, res) => {
    console.log(req.body.name)
    if(req.body.name !== ''){
    User.find({name : req.body.name})
        .then(user => res.send(user)) 
        .catch(err => res.status(404).json({success: false}))}
    else{
        res.send('invalid: empty string')
        (console.log('invalid: empty string'))}
} 
)

// @router Post api/user
// @desc Create user
// @access Public
router.post('/', (req, res) => {
    if(req.body.name !== ''){
    const newUser = new User({
        name: req.body.name,
        // id: req.body.id
    })
    newUser.save().then(user => res.json(user))
    .catch(err => res.status(404).json({success: false}))
    }else{
        res.send('invalid: empty string')
        console.log('inalid: empty string')
    }
})

// @router delete api/user
// @desc delete All user
// @access Public
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

// @router update api/user
// @desc update API user
// @access Public
router.put('/', (req, res) => {
    User.findOneAndUpdate({name: req.body.name}, {isValidated: true}, {useFindAndModify: false})
    .then(user => res.send(user)) 
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router