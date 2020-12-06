const express = require('express')
const route = express.Router()

const member = require('../../member')
route.get('/',(req,res)=> res.json(member))

route.get('/:userid',(req,res)=>{

    const found = member.some(member=>member.userid===parseInt(req.params.userid))

    if(found==true){
        res.json(member.filter(member=>member.userid===parseInt(req.params.userid)))
    }

    else{
        res.status(400).json({msg: `use with ${req.params.userid} does not exist`})
    }
})

module.exports = route