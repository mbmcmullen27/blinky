var express = require('express')
var fs = require('fs');

const PORT = 8080;
const HOST = 'localhost';

var app = express();

app.use(express.static('public'))

app.get('/blinky',(req,res)=>{
    const data = fs.readFileSync("blinky");
    res.send(data);
})

app.listen(PORT, HOST, () => console.log(`${HOST}:${PORT}`))