const express = require('express');

const app = express();
const bodyParser = require("body-parser");

let fileScope = "{\"accel_x\": \"0\" , \"accel_y\" : \"0\" , \"accel_z\" : \"0\"}";

app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send(fileScope)
});

app.post('/post-test', (req, res) => {
	fileScope = req.body.message;
	ws.send(fileScope);
    console.log('Got body:', req.body.message);
    res.sendStatus(200);

});
 

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(fileScope);


  });

  ws.send(fileScope);
});





app.listen(3000, () => console.log('Server running on port 3000'))
