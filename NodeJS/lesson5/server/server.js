const { WebSocket } = require("ws");

let wss = new WebSocket.Server({ port: 8000 });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    const parsedData = JSON.parse(data);

    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        if (parsedData.type === "join") {
          client.send(
            JSON.stringify({
              type: "join",
              name: parsedData.name,
            })
          );
        } else if (parsedData.type === "message") {
          client.send(data.toString());
        }
      }
    });
  });
});

console.log("Server running...");
