var express = require('express')
var fs = require('fs');

const PORT = 8080;
const HOST = '0.0.0.0';
var hits = 0;
var app = express();

app.use(express.static('public'))

app.get('/blinky',(req,res)=>{
    const data = fs.readFileSync("blinky");
    res.send(data);
    fs.appendFileSync('./log.txt',`/blinky has been hit ${hits++} time/s`);
})

app.listen(PORT, HOST, () => console.log(`${HOST} Listening on ${PORT} ...`));