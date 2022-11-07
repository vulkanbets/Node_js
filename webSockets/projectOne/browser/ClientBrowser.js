

// Create WebSocket connection.
const ws = new WebSocket(WEBSOCKETADDR);

ws.onopen = function()
{
    // Web Socket is connected, send data using send()
    ws.send("Connected");
    var label = document.getElementById("status");
    label.innerHTML = "Connection Established With Server @ => " + WEBSOCKETADDR;
};

function SuperLoop()
{
    if(ws.readyState == 1) {
        ws.send('WebSocket Connected @ Address  =>  ' + WEBSOCKETADDR);
    }
}

// Run Super Loop forever
setInterval(SuperLoop, 1200);
