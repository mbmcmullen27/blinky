var express = require('express');
var router = express.Router();
var fs = require('fs');

var HOST = process.env.HOST == undefined ? HOST='0.0.0.0' : HOST=process.env.HOST;
var PORT = process.env.PORT == undefined ? PORT=8080 : PORT=process.env.PORT;
var PREFIX = process.env.PREFIX == undefined ? PREFIX='app' : PREFIX=process.env.PREFIX;

var hits = 0;
var status = 200;
var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/'+PREFIX,router);

router.use(express.static('public'))

router.get('/blinky',(req,res)=>{
    console.log(`/blinky has been hit ${++hits} time/s -> active response code:${status}`);
    const data = fs.readFileSync("blinky");
    res.status(status);
    res.send(data);
})

router.post('/status', (req,res) => {
    var rstatus = parseInt(req.body.status);
    console.log(req.body);
    if(rstatus <= 600 && rstatus >= 100){
        status = rstatus;
        res.status(200);
    } else {
        res.status(418);
    }
    res.send();
})

router.get('/hits', (req,res) => {
    res.send(`${hits}\n`);
})

app.get('/*',(req,res)=>{
    console.log('This place is not a place of honor...');
    console.log('no highly esteemed deed is commemorated here...');
    console.log(`nothing valued is here @ ${req.originalUrl}`);
    res.status(404);
    res.send();
})
app.listen(PORT, HOST, () => console.log(`${HOST} Listening to /${PREFIX}/* on ${PORT}...`));