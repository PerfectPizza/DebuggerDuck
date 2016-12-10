'use strict';
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

// initiate a database variable to attach schemas to
let db = {};

const UserSchema = new Schema ({
	//mongoose will automatically create a unique id, so no need to manually create one
	username: String,
	fb_id: String,
	picture: String,
	groups: [{group_id: String, karma: {type: Number, default:0}}]
});

// let getNameFromFb = function(input){
// 	//TODO?: Using fbs api, retrieve the name from fb
// 	return input;
// }
// let getPicFromFb = function(input){
// 	//TODO: Using fbs api, retrieve the picture from fb
// 	return input;
// }

// UserSchema.pre('save', function(next) {
//   let username = getNameFromFb(input);
//   this.username = name;
//   let picture = getPicFromFb(input);
//   this.picture = picture;
//   next();
// });

const GroupSchema = new Schema ({
	// Will automatically generate group id
	name: String
})

const OrderSchema = new Schema ({
	// Will automatically generate order id
	order_user: String,
	location: String,
	time: String,
	group_id: String,
	picture: String,
	requests: [{user_id: String, picture: String, text: String}],
	createdAt: { type : Date, default: Date.now },
	orderNumber:String
})

db.User = mongoose.model('user', UserSchema);
db.Group = mongoose.model('group', GroupSchema);
db.Order = mongoose.model('order', OrderSchema);

module.exports = db;
