var express = require('express')
var app = express()
var path = require('path')
var port = 8081

var server = app.listen(port, function () {
  console.log('Listening on port: ' + port)
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade') // กำหนดให้ jade เป็น template engine
app.use(express.static('public')) // กำหนดให้ express อ่านไฟล์ static ที่ forder public
app.get('/', function (req, res) { // ทำการ route อ่านหน้าแรก
  res.render('index') // อ่านไฟล์ index.jade
})
var io = require('socket.io').listen(server)
io.on('connection', function (socket) { // เมื่อมี client เข้ามาเชื่อมต่อให้ทำอะไร?
  console.log('a user connected') // แสดงข้อความ "a user connected" ออกมาทาง console
})
io.on('connection', function (socket) {
  // เมื่อได้รับข้อมูลจากท่อ "chat" ให้ทำอะไร?
  socket.on('chat', function (message) {
    io.emit('chat', message)
  })
})
