const express = require('express')
const router = express.Router();

// User Model
const User = require('../../models/User')

// @router Get api/user
// @desc Get All user
// @access Public
router.get('/', (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(user => res.json(user)) 
})

// @router Post api/user
// @desc Create user
// @access Public
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        // id: req.body.id
    })
    newUser.save().then(user => res.json(user))
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
router.put('/:num', (req, res) => {
    User.findOneAndUpdate({num: req.params.num}, {isValidated: true}, {useFindAndModify: false})
    .then(res.json({success: true}))
    .then(res.json(user => res.json(user)))
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router