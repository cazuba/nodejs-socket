process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();

let counter = 0;
let sockets = {};

function timestamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

server.on('connection', socket => {
    console.log('Client connected');
    socket.id = counter++;
    socket.write('Welcome!\nPlease type your name:');

    socket.on('data', (data) => {
        if (!sockets[socket.id]) {
            socket.nickname = data.toString().trim();
            socket.write(`Welcome ${socket.nickname}!\n`);
            sockets[socket.id] = socket;
            return;
        }
        Object.entries(sockets).forEach(([key, cs]) => {
            if (socket.id == key) return;
            cs.write(`${socket.nickname} ${timestamp()}: `);
            cs.write(data);
        });
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client desconnected');
    });

    socket.setEncoding('utf8');
});

server.listen(8000, () => console.log('Server bound!'))