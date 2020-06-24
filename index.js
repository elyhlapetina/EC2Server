const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const WebSocket = require('ws') 
const wss = new WebSocket.Server({ port: 8080 })

let fileScope = "Can be accessed anywhere in the file";

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(fileScope)
});

app.post('/post-test', (req, res) => {
	fileScope = req.body.message + "test";
    console.log('Got body:', req.body.message);
    res.sendStatus(200);
});
 
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
  ws.send(fileScope)
})

app.listen(3000, () => console.log('Server running on port 3000'))
