require('dotenv').load();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const Promise = require('bluebird');
const request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES FOR OUR API
// =====================================================================================================================
// get an instance of the express Router
let router = express.Router();

// middleware to use for all requests
router.use((req, res, next) => {
    // do logging
    console.log('MIDDLEWARE. In case you want something to happen before the request...');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get("/", (req, res)=> {
    res.json({ message: 'Welcome to Pro Fight DB! SUPERPLEX!' });
});

// REGISTER OUR ROUTES
// all of our routes will be prefixed with /api
app.use('/api', router);

// create a search (accessed at GET http://localhost:3000/api/search)
router.route("/search/:search_term")
    .get((req, res) => {
        // Set up a promise (code that will eventually succeed/fail)
        return new Promise((resolve, reject) => {
            let profighdb_url = `http://profightdb.com/search.html?search-term=${req.params.search_term}&submit=search`;

            // Set up and make a request to the URL
            request({
                    method: 'get',
                    url: profighdb_url
                },
                (error, response, body) => {
                    if (!error && response.statusCode === 200) {
                        // The response was successful, now you can parse the HTML (or JSON/XML) whatever
                        // for example:
                        // let data = body.substring(body.indexOf('[CDATA[') + 7, body.indexOf(']]'));
                        console.log(body);
                        // resolve promise with response that you want to send back to the requester
                        resolve(body);
                    } else {
                        // resolve promise with error
                        reject(error);
                    }
                });
        })
        .then((response) => {
            // Request was successful
            return res.send(response);
        })
        .error((error) => {
            // Request threw error
            return res.send({"status": "error", "message": error});

        });
    });

// Start your server!
const server = app.listen(port, function(){
    console.log(`Listening on port ${server.address().port}`);
});