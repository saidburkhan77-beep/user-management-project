import express from 'express'
import { config } from 'dotenv'
import router from './router/router.js'
import {connectDB} from './config/db.js'
config()
const app = express()

const PORT = Number(process.env.API_PORT);

await connectDB()
app.use(express.json())

app.use('/',router);
app.listen(PORT, ()=> console.log('Server running on port ',PORT))