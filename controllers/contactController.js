//Get all contacts
//GET /contacts
const asyncHandler = require('express-async-handler');

const getAllContacts = asyncHandler(async(req,res)=>{
    res.send('Contacts Page');    
});

// Create contact
// POST /contact
const createContact = asyncHandler(async(req,res)=>{
    console.log(req.body);
    const {name, email, phone} = req.body;
    if( !name || !email || !phone){
        console.log('필수 입력값이 부족합니다.');
    }
    res.send('Create Contacts')
})

module.exports = {getAllContacts, createContact};