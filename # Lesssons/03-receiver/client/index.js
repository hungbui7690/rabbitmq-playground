const express = require('express')
const app = express()
const amqp = require('amqplib')

const PORT = process.env.PORT || 5002

app.use(express.json())

var channel, connection
connectQueue() // call the connect function

async function connectQueue() {
  try {
    connection = await amqp.connect('amqp://localhost:5672') // connect to local RabbitMQ server
    channel = await connection.createChannel()

    await channel.assertQueue('test-queue')

    // @ consume the message
    channel.consume('test-queue', (data) => {
      console.log(`${Buffer.from(data.content)}`) // @ {"title":"Six of Crows","author":"Leigh Burdugo"}
      channel.ack(data)
    })
  } catch (error) {
    console.log(error)
  }
}

app.listen(PORT, () => console.log('Server running at port ' + PORT))
