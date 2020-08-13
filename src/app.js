const express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    process = require('process');

let app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    console.log(process.env.TEST_VAR);
    res.send('Hello world!');
});

app.get('/send', (req, res) => {
    console.log('Sending message to another server')
    let options = {
        host: 'server2',
        path: '/'
    }

    http.request(options, callback).end();
});

callback = function(response) {
    var str = '';
  
    //another chunk of data has been received, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });
  
    //the whole response has been received, so we just print it out here
    response.on('end', function () {
      console.log("From remote server: " + str);
    });
}

app.listen(80);