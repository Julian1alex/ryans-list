const router = require("express").Router()
const db = require('../db')

router.get("/catnames", (req, res, next) => {
  ///This is the query we are running///
  const sql = 
  `SELECT name
  FROMnCatagories
  Where parent_id is NULL` 

  db.query(sql, (results) => {
    console.log(results)

  })
})

router.get("/subcats", (req, res, next) => {
    ///This is the query we are running///
  const sql = 
  `SELECT name
  FROM Catagories
  Where parent_id`

  db.query(sql, (results) => {
    console.log(results)

  })
})

module.exports = router
