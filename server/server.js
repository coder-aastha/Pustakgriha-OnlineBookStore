const express = require('express');
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors=require('cors');
const { useParams } = require('react-router-dom');

const app=express();


// database connection
// const MONGO_URL='mongodb+srv://bookstore:cjqGsLFpAufADozn@cluster0.3n2offn.mongodb.net/?retryWrites=true&w=majority'
const MONGO_URL="mongodb://127.0.0.1:27017/bookstore"

mongoose.connect(MONGO_URL)
.then(()=>console.log('Database connected'))
.catch((err)=> console.log('Database not connected',err))

// middleware
app.use(express.json())

app.use('/', require('./routes/authRoutes'))



const port =3001;
app.listen(port,() => console.log(`Server is running on port ${port}`))

