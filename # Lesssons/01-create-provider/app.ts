/*
  Intro
  - RabbitMQ is an open-source message broker software.
  - Message Broker is the intermediary agent between provider and client(s) that makes sure the message is not lost.
  - Some alternatives: Apache Kafka, Amazon Kinesis etc.

      Provider ->    Queue    -> Client
                  - Message 1
                  - Message 2
                  - Message 3
                  ...


-------------------------

  Setup
  - we will use RabbitMQ docker image to run RabbitMQ server locally
  - docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4.0.3-management

  🎲 PORT <15672> for RabbitMQ Management console
    -> UI -> http://localhost:15672
      # guest/guest
  🥌 PORT <5672> RabbitMQ main port (AMQP)


-------------------------

  - express -> to create a node.js application.
  - amqplib -> to create a message broker.


  ⛳ const amqplib = require('amqplib/callback_api')
    -> from npm docs
    -> but it does not work 
    -> const amqplib = require('amqplib');



*/
