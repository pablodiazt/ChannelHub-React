const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    username: {	type: String, required: true },
    email: { type: String, required: true },
    password: {	type: String, required: true },
    creationDate: { type: Date, default: Date.now },
    validated: { type: Boolean, default: false },
    validationToken: { type: String, required: true }
});

UserSchema.pre('save', function(next) {
    if (this.isModified("password")) {
    	var pw = this.password;
	bcrypt.genSalt(10, (err, salt) => {
	    if (err) throw err;
	    else {
		bcrypt.hash(pw, salt, (err, hash) => {
		    if (err) throw err;
		    this.password = hash;
		    next();
		});
	    }
	});
    }
    else {
	next();
    }
});



module.exports = mongoose.model("User", UserSchema);
