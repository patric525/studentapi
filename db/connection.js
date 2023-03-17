const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})

db=process.env.DATABASE


const connect = async()=>{
    try {
        const data = await mongoose.connect(db)
        if(data){
            console.log('connect successful');
        }
    } catch (error) {
        console.log(error);
    }
}

connect()