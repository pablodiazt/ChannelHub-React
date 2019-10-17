var validator = require('validator');
var isEmpty = require('is-empty');

module.exports = {
    register: function(reqData) {
	var errors = {};

	reqData.username = !isEmpty(reqData.username) ? reqData.username : "";
	reqData.email = !isEmpty(reqData.email) ? reqData.email : "";
	reqData.password = !isEmpty(reqData.password) ? reqData.password : "";
	reqData.passwordVerify = !isEmpty(reqData.passwordVerify) ? reqData.passwordVerify : "";

	if (validator.isEmpty(reqData.username)) {
	    errors.username = "Name field required";
	}

	// validate email address
	if (validator.isEmpty(reqData.email)) {
	    errors.email = "Email field required";
	} else if (!validator.isEmail(reqData.email)) {
	    errors.email = "Please enter a valid email"
	}

	if (validator.isEmpty(reqData.password)) {
	    errors.password = "password field cannot be empty";
	}
	if (validator.isEmpty(reqData.passwordVerify)) {
	    errors.passwordVerify = "password verification field cannot be empty";
	}

	if (!validator.equals(reqData.password, reqData.passwordVerify)) {
	    errors.passwordVerify = "Password fields must match";
	}
	
	return {
	    isValid: isEmpty(errors),
	    errors
	}
    },
    login: function(reqData) {
	var errors = {};

	reqData.username = !isEmpty(reqData.username) ? reqData.username : "";
	reqData.password = !isEmpty(reqData.password) ? reqData.password : "";

	if (validator.isEmpty(reqData.username)) {
	    errors.username = "Name field required";
	}

	if (validator.isEmpty(reqData.password)) {
	    errors.password = "password field cannot be empty";
	}

	return {
	    isValid: isEmpty(errors),
	    errors
	}
    }
}
