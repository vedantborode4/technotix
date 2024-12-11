import express from "express"

const app = express()

app.use(express.json())

import messageUsRouter from "./routes/messageUS.routes.js"

app.use("/api/v1/message/", messageUsRouter)

export {app}