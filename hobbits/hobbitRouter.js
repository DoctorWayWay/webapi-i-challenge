const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: "Samwise Gamgee"
    },
    {
      id: 2,
      name: "Frodo Baggins"
    }
  ]
  res.status(200).json(hobbits)
})

module.exports = router
