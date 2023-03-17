const express = require('express')
const router = express.Router()
const user = require('../models/userschema')


router.post('/createuser', async(req,res)=>{
    try {
        const { username , location , status}=req.body
        const newuser = new user({username:username, location:location, Status:status})
        const saveuser= await newuser.save()
        if(saveuser){
            return res.json({message:'usersaved successfully'})
        }
    } catch (error) {
        console.log(error);
    }
})

router.get('/getuser' , async(req,res)=>{
    try {
        const{Status, location, username}=req.query
        console.log(typeof(Status));
        console.log(typeof(location));
        console.log(typeof(username));
        if(!location && !username && !Status){
            const data = await user.find()
            return res.json(data)
        }
        else if(location && username && Status){
            const data  = await user.find({$or:[{location:{$regex:location, $options:"$i"}} , {username:{$regex:username, $options:"$i"}} , {Status:{$regex:Status, $options:"$i"}}]})
            return res.json(data)
         }
        else if(location && Status){
            const data  = await user.find({$or:[{location:{$regex:location, $options:"$i"}} , {Status:{$regex:Status, $options:"$i"}}]})
            return res.json(data)
         }
         else if(username && Status){
            const data  = await user.find({$or:[{username:{$regex:username, $options:"$i"}} , {Status:{$regex:Status, $options:"$i"}}]})
            return res.json(data)
         }
        else if(location && username){
           const data  = await user.find({$or:[{location:{$regex:location, $options:"$i"}} , {username:{$regex:username, $options:"$i"}}]})
           return res.json(data)
        }
        else if(Status){
            const data = await user.find({Status:{$regex:Status, $options:"$i"}})
            return res.json(data)
        }
        else if(username){
           const data =await user.find({username:{$regex:username, $options:"$i"}})
           return res.json(data)
        }
        else if(location){
            const data =await user.find({location:{$regex:location, $options:"$i"}})
            return res.json(data)
         }
    } catch (error) {
        console.log(error);
    }
})

module.exports=router