const express = require('express');

const app = express();
const expressWs = require('express-ws')(app);



const bodyParser = require("body-parser");

let fileScope = "Can be accessed anywhere in the file";

app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send(fileScope)
});

app.post('/post-test', (req, res) => {
	fileScope = req.body.message;
    console.log('Got body:', req.body.message);
    res.sendStatus(200);
});
 
app.ws('/echo', (ws, req) => {

	ws.on('connection', msg => {
        ws.send(fileScope)
    })



    ws.on('message', msg => {
        ws.send(fileScope)
    })

    ws.on('close', () => {
        console.log('WebSocket was closed')
    })
})




app.listen(3000, () => console.log('Server running on port 3000'))
