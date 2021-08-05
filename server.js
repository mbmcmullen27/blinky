var express = require('express');
var router = express.Router();
var fs = require('fs');

var HOST = process.env.HOST == undefined ? HOST='0.0.0.0' : HOST=process.env.HOST;
var PORT = process.env.PORT == undefined ? PORT=8080 : PORT=process.env.HOST;
var PREFIX = process.env.PREFIX == undefined ? PREFIX='app' : PREFIX=process.env.PREFIX

var hits = 0;
var app = express();

app.use('/'+PREFIX,router);

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