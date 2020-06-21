const express = require('express')
const app = express()

let fileScope = "Can be accessed anywhere in the file";

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send(fileScope)
})

app.post('/post-test', (req, res) => {
	fileScope = req.body.message;
    console.log('Got body:', req.body.message);
    res.sendStatus(200);
});



app.listen(3000, () => console.log('Server running on port 3000'))
