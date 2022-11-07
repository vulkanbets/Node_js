const { WebSocketServer } = require('ws');
const { PORT_INT } = require('./consts.js');



const wss = new WebSocketServer({ port: PORT_INT });

wss.on('connection', function connection(ws)
{
    ws.on('message', function message(data)
    {
        console.log('received: %s', data);
    });
});
