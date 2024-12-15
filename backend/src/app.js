import express from "express"
import cors from "cors"
import 'dotenv/config'


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: "GET, POST",
}))

app.use(express.json())

import messageUsRouter from "./routes/messageUS.routes.js"

app.use("/api/v1/message/", messageUsRouter)

export {app}