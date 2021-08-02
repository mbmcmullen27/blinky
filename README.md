# Blinky

Small webserver for small tests. Use it to answer questions
- Can I hit an endpoit?
- Are my ports open?
- Is my proxy working?

## Instructions

Start the server with nodejs:

```bash
node server.js
```

Browse the page at localhost:

```url
localhost:8080/blinky.html
```

Get the endpoint with curl:
```bash
curl localhost:8080/blinky
```

## Features
- A webpage!

![blinking](./public/blinking.gif)

- An endpoint!

![get_blinky](./public/get_blinky.gif)