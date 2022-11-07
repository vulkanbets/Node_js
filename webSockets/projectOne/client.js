const { WebSocket } = require('ws');
const { WEBSOCKETADDR } = require('./consts.js');


const ws = new WebSocket(WEBSOCKETADDR);

ws.on('open', function open() { ws.send('Connected'); });

function SuperLoop()
{
    ws.send('Hello From WebSocket Client!');
}

setInterval(SuperLoop, 600);
