import "reflect-metadata";
import { config } from 'dotenv'
import express from 'express'

import './database/connect.js'
config()

const port = parseInt(process.env.API_PORT)
const app = express()

app.listen(port, () => (
    console.log(`API is running ${port}`)
))