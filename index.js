const express = require('express');
const enableWs = require('express-ws')

const app = express();
const bodyParser = require("body-parser");

const wss = new WebSocket.Server({port:8080})
let fileScope = "Can be accessed anywhere in the file";


enableWs(app)

app.ws('/echo', (ws, req) => {
    ws.on('message', msg => {
        ws.send(fileScope)
    })

    ws.on('close', () => {
        console.log('WebSocket was closed')
    })
})





app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(fileScope)
});

app.post('/post-test', (req, res) => {
	fileScope = req.body.message;
    console.log('Got body:', req.body.message);
    res.sendStatus(200);
});
 

app.listen(3000, () => console.log('Server running on port 3000'))
