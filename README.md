This repository contains Node.js code which demonstrates setting up a simple
webserver which can both provide a static web page and answer JSON
requests with JSON replies.

## Install

Here's how you install dependencies.

```
$ git clone https://github.com/wawiesel/nodejs-json-request-response-webserver.git nodejs-server
$ cd nodejs-server
$ npm install
```

## Server

Start up the server.
```
$ node server.js
```

Keep it running in its own terminal window.


## Static Web Page

In your web browser navigate to `http://127.0.0.1:3000/` and you should see:
```
Hello world! This is HTML5 Boilerplate.
```

The HTML for this is contained in the `public/` subdirectory.
```
$ more public/index.html
<!doctype html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>

        <p>Hello world! This is HTML5 Boilerplate.</p>

    </body>
</html>
```


## Data request/retrieval

CURL is the easiest way to test the request. Open a new terminal and post the
following.

```
$ curl -d '{"n": 55, "u": [11,19,13] }' -H "Content-Type: application/json" http://127.0.0.1:3000/
```

Now quickly go back to the server terminal and you should see this text.
```
processing request n=55
```

Now go back to the `curl` window, the response should appear (after 8 seconds)
```
{ "samples": 55, "u": "11,19,13" }
```

You can test that you can fire off multiple curls in succession and they all
will be immediately logged in the server terminal but will be processed
asynchronously and the responses will appear in quick succession.

