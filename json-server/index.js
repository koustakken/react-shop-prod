const fs = require('fs')
const jsonServer = require('json-server')
// const jwt = require('jsonwebtoken')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

// искуственная задержка
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 1000)
  })
  next()
})

// проверка авторизации
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Пользователь не авторизован' })
  }
  next()
})

server.use(jsonServer.defaults())
server.use(router)

// эндпоинты
// Login
server.post('/login', (req, res) => {
  const { username, password } = req.body
  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8')
  )
  const { users } = db

  const userFormBD = users.find(
    (user) => user.username === username && user.password === password
  )

  if (!userFormBD) {
    return res.status(403).json({ message: 'Пользователь не найден' })
  }

  return res.json(userFormBD)
})

// start
server.listen(8000, () => {
  console.log('json-server is running on 8000 port')
})
