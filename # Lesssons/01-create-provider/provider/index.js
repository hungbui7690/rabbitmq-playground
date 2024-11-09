const express = require('express')
const app = express()
const amqp = require('amqplib') // 1.
const PORT = process.env.PORT || 5001

app.use(express.json())

let channel, connection // 2.

// 3.
async function connectQueue() {
  try {
    connection = await amqp.connect('amqp://localhost:5672') // connect to local RabbitMQ server
    channel = await connection.createChannel() // We create a channel from the connection using which we can access the queues.

    await channel.assertQueue('test-queue') // check for a queue named ‘test-queue’ -> if queue not exist, a new queue is created
  } catch (error) {
    console.log(error)
  }
}

connectQueue() // 4.

app.get('/send-msg', (req, res) => {
  res.send('Hello world')
})

app.listen(PORT, () => console.log('Server running at port ' + PORT))
