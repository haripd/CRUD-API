// const express = require('../model/user')
//read all users
// const readAll = function(req, res){
// res.status(200).json({status : true, msg: "read all users"})
// }

const readAll = async (req, res)=>{
    // let users = await User.find()
    res.status(200).json({status: true, length: users.length, users})
}

//read single user
const singleUser = function(req, res){
    res.status(200).json({status:true, msg: "read the single user"})
}

//create new user and 201 request is accpeted the data
const createUser = function(req, res){
    res.status(201).json({status:true, msg:"create new user"})
}

//update the user
const updateUser = function(req, res){
    res.status(201).json({status:true, msg:"update the user"})
}

//delete the user
const deleteUser = function(req, res){
    res.status(201).json({status:true, msg:"delete the user"})
}

module.exports = {readAll, singleUser, createUser, updateUser, deleteUser}