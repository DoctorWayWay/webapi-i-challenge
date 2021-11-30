// IMPORTS
const express = require("express")

const server = express()

const hobbitRouter = require("./hobbits/hobbitRouter")

server.use("/hobbits", hobbitRouter)

server.listen(8000, () => {
  console.log("API running on port 8000")
})
