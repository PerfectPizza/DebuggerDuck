const mongoose = require ('mongoose');

//This must be called because mongoose's promises library is deprecated
mongoose.Promise = global.Promise;
 
const mongodbUri = 'mongodb://perfectpizza:perfectPizza8@ds129038.mlab.com:29038/heroku_jtrfbw7c';
mongoose.connect(mongodbUri);

const conn = mongoose.connection;   
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));
 
module.exports = conn;

//FYI, if you want play with the data in the command line, use this:
// mongo ds129038.mlab.com:29038/heroku_jtrfbw7c -u perfectpizza -p perfectPizza8