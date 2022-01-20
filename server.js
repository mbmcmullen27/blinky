const Blinky = require('./model.js'),
    express = require('express'),
    router = express.Router(),
    HOST = process.env.HOST??'0.0.0.0',
    PORT = process.env.PORT??8080,
    PREFIX = process.env.PREFIX??'app'

var blinky = new Blinky(),
    app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/'+PREFIX, router);

router.use(express.static('public'))

router.get('/blinky',(req, res)=>{
    console.log(
        `/blinky has been hit ${++blinky.hits} time/s -> active response code:${blinky.status}`
    );
    res.status(blinky.status);
    res.send(Blinky.image);
})

router.post('/status', (req, res) => {
    var rstatus = parseInt(req.body.status);
    console.log(req.body);
    if(rstatus <= 600 && rstatus >= 100){
        blinky.status = rstatus;
        res.status(200);
    } else {
        res.status(418);
    }
    res.send();
})

router.get('/hits', (req, res) => {
    res.send(`${blinky.hits}\n`);
})

router.get('/timeout/:miliseconds', (req, res) => {
    res.status(200)
    var ms = parseInt(req.params.miliseconds)
    console.log(`Timeout! Wait for ${ms}ms`)
    setTimeout(()=>res.send(':thumbsup\n'), ms)
})

router.get('/n/:count', (req, res) => {
    res.status(200)
    res.send(blinky.n(parseInt(req.params.count)))
})

router.get('/nlogn/:count', (req, res) => {
    res.status(200)
    res.send(blinky.nlogn(parseInt(req.params.count)))
})

router.get('/nsquared/:count', (req, res) => {
    res.status(200)
    res.send(blinky.nsquared(parseInt(req.params.count)))
})

app.get('/*',(req, res)=>{
    const message = error404s[Math.floor(Math.random()*3)]
    console.log(`\n${message} @ ${req.originalUrl}`);
    res.status(404);
    res.send();
})

let error404s = [
    'This place is not a place of honor',
    'No highly esteemed deed is commemorated here',
    'Nothing valued is here'
]

app.listen(PORT, HOST, () => console.log(`${HOST} Listening to /${PREFIX}/* on ${PORT}...`));