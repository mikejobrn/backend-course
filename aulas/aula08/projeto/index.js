const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/alunos', (req, res) => {
  res.send('Lista de alunos')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})