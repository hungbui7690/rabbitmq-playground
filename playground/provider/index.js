const express = require('express')
const app = express()
const amqp = require('amqplib')
const PORT = process.env.PORT || 5001

app.use(express.json())

let channel, connection

async function connectQueue() {
  try {
    connection = await amqp.connect('amqp://localhost:5672')
    channel = await connection.createChannel()
    await channel.assertQueue('test-queue')
  } catch (error) {
    console.log(error)
  }
}

connectQueue()

// 1. send a message to the queue. -> enqueue
async function sendData(data) {
  await channel.sendToQueue('test-queue', Buffer.from(JSON.stringify(data)))

  await channel.close()
  await connection.close()
}

app.get('/send-msg', (req, res) => {
  // data to be sent
  const data = {
    title: 'Six of Crows',
    author: 'Leigh Burdugo',
  }
  sendData(data) // 2. pass the data to the function we defined
  console.log('A message is sent to queue')
  res.send('Message Sent')
})

app.listen(PORT, () => console.log('Server running at port ' + PORT))
