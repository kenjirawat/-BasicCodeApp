var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function (req, res) {
  res.sendfile('index.html')
})

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg)
  })
})
io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg)
    if (msg === 'คุณชื่ออะไร') {
      msg = 'หนูชื่อ มะลิ ค่ะ'
    } else if (msg === 'สวัสดี') {
      msg = 'สวัสดีค่ะ'
    } else {
      msg = 'ฉันไม่เข้าใจที่คุณพูด'
    }
    io.emit('chat message', msg)
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})
