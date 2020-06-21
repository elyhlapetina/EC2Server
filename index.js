const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Commit this!')
})

app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});



app.listen(3000, () => console.log('Server running on port 3000'))
