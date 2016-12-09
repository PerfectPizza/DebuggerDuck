'use strict';
const mongoose = require ('mongoose');


//This must be called because mongoose's promises library is deprecated
mongoose.Promise = global.Promise;
 
const mongodbUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds129038.mlab.com:29038/heroku_jtrfbw7c`;
mongoose.connect(mongodbUri);


const conn = mongoose.connection
// CONNECTION EVENTS
// When successfully connected
conn.on('connected', function () {  
  console.log('Mongoose connection open');
}); 

// If the connection throws an error
conn.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
conn.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});
 
module.exports = conn;

//FYI, if you want play with the data in the command line, use this:
// mongo ds129038.mlab.com:29038/heroku_jtrfbw7c -u USERNAME -p PASSWORD