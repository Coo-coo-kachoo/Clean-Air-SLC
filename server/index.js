//framework for node.js
const express = require('express');
// Cross-Origin Resource Sharing (CORS). CORS introduces a standard mechanism that can be used by all browsers for implementing cross-domain requests.
// The spec defines a set of headers that allow the browser and server to communicate about which requests are (and are not) allowed.
// CORS continues the spirit of the open web by bringing API access to all.
const cors = require('cors');
//Node.js body parsing middleware.
//Parses incoming request bodies in a middleware before your handlers, available under the req.body property.
const bodyParser = require('body-parser');
//Mongoose provides a schema-based solution to model your application data.
//It includes built-in type casting, validation, query building, business logic hooks and more.
const mongoose = require('mongoose');

//keeping these settings (db name, port, and secret) seperate makes it easier to change once you hit deployment
let settings = require('./config/settings.js');

//import routes
let airQualityRouter = require('./routes/air-quality.js');
let authRouter = require('./routes/auth.js');

let PORT = process.env.PORT || settings.port;

mongoose.connect(`mongodb://localhost:27017/${settings.db}`);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({encoded:false}));
app.use(bodyParser.json());

//app.use routers
app.use('/airquality', airQualityRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
