# Blinky

Get the image from [docker hub](https://hub.docker.com/r/mcmull27/blinky)
```bash
docker pull mcmull27/blinky:latest
```
Small webserver for small tests. Use it to answer questions
- Can I hit an endpoint?
- Are my ports open?
- Is my proxy working?
- Is my ingress configured correctly?
- Whatever?

## Instructions

Set HOST, PORT, and route PREFIX with corresponding env vars.

Defaults:
```bash
export HOST="0.0.0.0"
export PORT="8080"
export PREFIX="app"
```

Start the server with nodejs
```bash
node server.js
```

Browse the page at localhost
```bash
# echo "localhost:$PORT/$PREFIX/blinky.html"
localhost:8080/app/blinky.html
```

Get the endpoint
```bash
# GET /$PREFIX/blinky
curl localhost:8080/app/blinky
```

Get number of requests made to the /blinky endpoint
```bash
# GET /$PREFIX/hits
curl localhost:8080/app/hits
```

Set the /blinky endpoint's response code with a POST to /status

```bash
# POST /$PREFIX/status
curl -H "Content-Type: application/json" -d '{"status":"401"}' -X POST localhost:8080/app/status
```

Get endpoints that execute with known [Big-O](https://www.bigocheatsheet.com/) time complexity
```bash
# bubble sort on an already sorted list with variable length
# GET /$PREFIX/n/:count
curl localhost:8080/app/n/100

# bubble sort on a reverse sorted list with variable length
# GET /$PREFIX/nsquared/:count
curl localhost:8080/app/nsquared/100

# merge sort on a random list with variable length
# GET /$PREFIX/nlogn/:count
curl localhost:8080/app/nlogn/100
```

Get an endpoint with a specific timeout
```bash
# return a response in 1 second
# GET /$PREFIX/timeout/:milliseconds 
curl localhost:8080/app/timeout/1000
```

## Features
- A webpage!

![blinking](./public/src/blinking.gif)

- An endpoint!

![get_blinky](./public/src/get_blinky.gif)
