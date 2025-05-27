import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js";
//import All route
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const app = express()

app.use(cors({
    origin: process.env.BASE_URL,
    methods: ['GET','POST','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization']
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = process.env.PROT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/rahat', (req,res) => {
    res.send('Rahat')
})

app.get('/lubanrahat', (req,res) => {
    res.send('Luban Rahat')
})

// connect to db
db()

//user routes
app.use("/api/v1/user",userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
