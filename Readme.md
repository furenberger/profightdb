# ProFightDB API 

This is a REST API to proxy searches to a website and return the response.  


## Getting started
Install: `npm i`

Run: `npm run start`
 
This API runs using nodemon, which monitors and automatically restarts the node process when any changes are saved.

## Use
To access the API call a HTML GET/POST to the specific endpoint.

####Search:

``http://localhost:3000/api/search/:search_team``

:search_term is the parameter you want to use for your search.  ie `http://localhost:3000/api/search/suplex`