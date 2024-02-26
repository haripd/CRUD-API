const express = require('express')
const userRoute = express.Router()

const { readAll, singleUser, updateUser, deleteUser, createUser } = require('../controller/userController')

//read all the users => get request method  /api/user/all
userRoute.get(`/all`, readAll)

//read single => /api/user/single/123
userRoute.get(`/single/:id`, singleUser)

//create the user => post request -> /api/user/create
userRoute.get(`/create`, createUser)

//update the existing user => patch method -> /api/user/update/123
userRoute.get(`/update/:id`, updateUser)

//delete the user => delete method -> /api/user/delete/123
userRoute.get(`/delete/:id`, deleteUser)

module.exports = userRoute