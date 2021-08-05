import amqp from 'amqplib/callback_api';
const CONN_URL = 'amqps://cmpruidu:t7DOfy9nm0rUOUeuacUdLsSWIIGVkYjE@elk.rmq2.cloudamqp.com/cmpruidu';

let ch = null;
amqp.connect(CONN_URL, function (err, conn) {
    conn.createChannel(function (err, channel) {
        ch = channel;
    });
});

export const publishToQueue = async (queueName, data) => {
    ch.sendToQueue(queueName, new Buffer(data), {persistent: true});
}

process.on('exit', (code) => {
    ch.close();
    console.log(`Closing rabbitmq channel`);
});