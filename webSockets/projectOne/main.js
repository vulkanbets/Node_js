const express = require('express')
const APP = express()
const HTTP_PORT = 20040
APP.get('/', (req, res) =>
{
  res.send('Hello From Express!!')
})

APP.listen(HTTP_PORT, () =>
{
  console.log(`Example app listening on port ${HTTP_PORT}`)
})
