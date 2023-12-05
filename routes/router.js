const express = require('express');
const router = express.Router();
const {getAllContacts, createContact }= require('../controllers/contactController');

router.route('/')
.get(getAllContacts)
.post(createContact)

router.route('/:id')
.get((req,res)=>{
    res.send(`View contacts for ID: ${req.params.id}`)
})
.put((req,res)=>{
    res.send(`Update contacts for ID: ${req.params.id}`)
})
.delete((req,res)=>{
    res.send(`Delete contacts for ID: ${req.params.id}`)
})

module.exports = router;