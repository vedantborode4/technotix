import express from 'express'
import 'dotenv/config'
import connectDB from './database/index.js'

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 

connectDB()