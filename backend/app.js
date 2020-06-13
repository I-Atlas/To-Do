const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/api/todos", require('./routes/todo.routes'))

//console.log(require('dotenv').config({debug: true})) DEBUG

async function start() {
    
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex: true
        })
        .then(() => console.log("MongoDB connected."))
        app.listen(port, () => console.log(`App has been started on port: ${port}.`))
    } catch (e) {
        console.log("Server error", e.message)
        process.exit(1)
    }
}

start()