const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.static('public'));
app.use(express.static('static'));


app.listen(PORT, ()=> console.log(`Server listeing on port: ${PORT}`));

