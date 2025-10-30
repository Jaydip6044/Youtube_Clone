// require('dotenv').config()
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js'

dotenv.config({
    path:"./env"
})

connectDB(); // connection of database function call





/* multiline comment
import express from 'express'

const app=express()

( async ()=>{
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
      })
    } catch (error) {
         console.log("ERROR:",error)
         throw error 
    }

     })() //IIFE immediately invoked function expression
      */