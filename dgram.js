
// Server
const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UPD Server listening...'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`)
});

const PORT = 3333;
const HOST = '127.0.0.1';

server.bind(PORT, HOST);

// Client
const client = dgram.createSocket('udp4');
const msg = Buffer.from('Coding as a crazy dev');

client.send(msg, 0, msg.length, PORT, HOST, (err) => {
    if (err) throw err;
    console.log('UPD Message Sent!');
    client.close();
});

// Or send multiple msgs
// client.send([], PORT, HOST, (err) => {
//     if (err) throw err;
//     console.log('UPD Message Sent!');
//     client.close();
// });
