var amqp = require('amqplib/callback_api');
const CONN_URL = 'amqps://cmpruidu:t7DOfy9nm0rUOUeuacUdLsSWIIGVkYjE@elk.rmq2.cloudamqp.com/cmpruidu';
amqp.connect(CONN_URL, function (err, conn) {
  conn.createChannel(function (err, ch) {
    ch.consume('user-messages', function (msg) {
      console.log('.....');
      setTimeout(function(){
        console.log("Rating Service Subscriber:", msg.content.toString());
      },8000);
      },{ noAck: true }
    );
  });
});