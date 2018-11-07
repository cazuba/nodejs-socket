process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();

server.on('connection', socket => {
    console.log('Client connected');
    socket.write('Welcome new client!\n');

    socket.on('data', (data) => {
        console.log('Data is ', data);
        socket.write('Data is:');
        socket.write(data);
    });

    socket.on('end', () => {
        console.log('Client desconnected');
    });

    socket.setEncoding('utf8');
});

server.listen(8000, () => console.log('Server bound!'))