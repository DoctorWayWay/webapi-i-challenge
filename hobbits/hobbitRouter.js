// ===== IMPORTS =====
const express = require("express")
const Hobbits = require("./hobbits")

// ===== INSTANCE OF EXPRESS ROUTER =====
const router = express.Router()

// ===== ENDPOINTS =====
// [GET] /hobbits (returns hobbits)
router.get("/", (req, res) => {
  console.log(req.query)
  const sortField = req.query.sortBy || "id"
  const response = Hobbits.sort((a, b) => {
    (a[sortField] < b[sortField]) ? -1 : 1
  })
  res.status(200).json(response)
})

// [POST] /hobbits
let nextId = 3;

router.post("/", (req, res) => {
  const hobbit = req.body
  hobbit.id = nextId++

  Hobbits.push(hobbit)

  res.status(201).json(hobbits)
})
// router.post("/", (req, res) => {
//   res.status(201).json({ "url": "/", "operation": "POST" })
// })

// [PUT] /hobbits
router.put("/", (req, res) => {
  res.status(200).json({ "url": "/", "operation": "PUT" })
})

// [DELETE] /hobbits/:id
router.delete("/:id", (req, res) => {
  const { id } = req.params
  console.log(req.params)
  res.status(204).json({
    "url": `/${id}`,
    "operation": `DELETE hobbit with id of ${id}`
  })
})


module.exports = router
