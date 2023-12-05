const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect');

dbConnect();
app.get('/',(req, res)=>{
    res.send('Hello, Node!')
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/contacts', require('./routes/router'));
app.listen(3000, ()=>{
    console.log('Running server on 3000...')
})