/**
 * Starts the application on the port specified.
 */
/*
 require('dotenv').config();

 import api from './api';
 
 const PORT = process.env.PORT || 8080;
 
 api.listen(PORT, () => {
   console.log(`Listening on port ${PORT}`);
 });
*/

/* SSL working ateh obtemContaDoClieten, obtemContaDocliente da Error code 1003 */

const https = require("https");
const { resolve } = require('path');
const { readFileSync } = require("fs");
require('rootpath')();
require('dotenv').config();

import api from './api';

var port = "477"
if(process.env.NODE_ENV === 'production' ? (process.env.PORT || 477) : port) {
	const options = {
	  key: readFileSync(`${resolve(process.cwd(), 'ssl/beexAdminServer.prod.key')}`),
	  cert: readFileSync(`${resolve(process.cwd(), 'ssl/beexAdminServer.prod.crt')}`),
	};
	https.createServer(options, api).listen(port, () => console.log('https server on port ' + port));
}



