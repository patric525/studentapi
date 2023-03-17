const express = require('express')
const app = express()

require('./db/connection')

app.use(express.json())

app.use(require('./routes/user'))

app.get('/', async(req,res)=>{
    res.send('hello world  cgfhg')
})

app.listen(5000, ()=>{
    console.log('server started at port 5000');
})