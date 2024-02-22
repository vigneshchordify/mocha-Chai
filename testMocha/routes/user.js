const express= require('express')

const router=express.Router()

const usercntrl=require('../controller/usercntrlr')

router.get('/',usercntrl.userlist)

module.exports=router