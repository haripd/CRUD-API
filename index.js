const express = require('express')
//settting to access .env variables

require('dotenv').config()
// const connectDB = require('./db/connect')
// const cors = require('cors')
const port = process.env.PORT
// const port = 4500

//instance to express
const app = express()

//app.get(route, controller)
//index route - get request method
app.get(`/`, function(req, res){
    res.status(200).json({status: true, msg: "Welcome to CRUD API"})
})

//connecting to router => app.use(path, router)
app.use(`/api/user`, require('./route/userRoute'))

//default route
app.all('**', (req, res)=>{
    res.status(404).json({status: true, msg: `Requested path not found`})
})

//call server listen property
app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})