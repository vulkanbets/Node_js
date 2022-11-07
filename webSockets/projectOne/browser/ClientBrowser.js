



// Create WebSocket connection.
const ws = new WebSocket(WEBSOCKETADDR);

ws.onopen = function()
{
    // Web Socket is connected, send data using send()
    ws.send("Connected");
};

function SuperLoop() {
    if(ws.readyState == 1) {
        ws.send('Hello From WebSocket Client!');
    }
}

setInterval(SuperLoop, 1200);
