/*
  Create Node app 2 -> Client
  - receive the message from the queue
  - npm i express amqplib


-----------------------

  - The message from the queue is read using the consume() method. It takes the name of the queue ( ‘test-queue’ ) as a parameter and returns the message from the queue as a callback.
  - The channel.<ack()> function is used to acknowledge that the particular message has been received by the ‘client-app’.


*/
