const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json([
        {message: 'Tudo ok!'}
    ])
})


app.listen(3000);
console.log('Server is running...')