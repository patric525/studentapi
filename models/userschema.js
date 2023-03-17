const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    location:[
        {
            type:String,
            require:true
        }
    ],
    Status:{
        type:String,
        require:true
    }

})

const user = mongoose.model('user' , userSchema)
module.exports=user