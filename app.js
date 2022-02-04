const express = require('express');
const app = express();
const routes = require('./routes/users.js')
const port = process.env.PORT || '4000';

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/users',routes);

app.listen(port, ()=>{
    console.log(`The server is running to ${port}`)
})