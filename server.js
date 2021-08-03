var express = require('express')
var fs = require('fs');

const PORT = 8080;
const HOST = '0.0.0.0';
var hits = 0;
var app = express();

app.use(express.static('public'))

app.get('/blinky',(req,res)=>{
    console.log(`\n/blinky has been hit ${++hits} time/s`);
    const data = fs.readFileSync("blinky");
    res.send(data);
})

app.get('/hits', (req,res) => {
    res.send(`${hits}`);
})

app.listen(PORT, HOST, () => console.log(`${HOST} Listening on ${PORT}...`));