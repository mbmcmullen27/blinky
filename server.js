var express = require('express');
var router = express.Router();
var fs = require('fs');

const PORT = 8080;
const HOST = '0.0.0.0';
const prefix = '/app'

var hits = 0;
var app = express();

app.use(prefix,router);

router.use(express.static('public'))

router.get('/blinky',(req,res)=>{
    console.log(`/blinky has been hit ${++hits} time/s`);
    const data = fs.readFileSync("blinky");
    res.send(data);
})

router.get('/hits', (req,res) => {
    res.send(`${hits}\n`);
})

app.listen(PORT, HOST, () => console.log(`${HOST} Listening on ${PORT}...`));