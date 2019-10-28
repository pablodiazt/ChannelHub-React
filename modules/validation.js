var validator = require('validator');
//var isEmpty = require('is-empty');
var is = require('is_js');
module.exports = {
    register: function(reqData) {
	var errors = {};

	reqData.username = !is.empty(reqData.username) ? reqData.username : "";
	reqData.email = !is.empty(reqData.email) ? reqData.email : "";
	reqData.password = !is.empty(reqData.password) ? reqData.password : "";
	reqData.passwordVerify = !is.empty(reqData.passwordVerify) ? reqData.passwordVerify : "";

	if (is.empty(reqData.username)) {
	    errors.username = "Name field required";
	}

	// validate email address
	if (is.empty(reqData.email)) {
	    errors.email = "Email field required";
	} else if (!is.email(reqData.email)) {
	    errors.email = "Please enter a valid email"
	}

	if (is.empty(reqData.password)) {
	    errors.password = "password field cannot be empty";
	}
	if (is.empty(reqData.passwordVerify)) {
	    errors.passwordVerify = "password verification field cannot be empty";
	} else if (!is.equal(reqData.password, reqData.passwordVerify)) {
	    errors.passwordVerify = "Password fields must match";
	}
	
	return {
	    isValid: is.empty(errors),
	    errors
	}
    },
    login: function(reqData) {
	var errors = {};

	reqData.username = !is.empty(reqData.username) ? reqData.username : "";
	reqData.password = !is.empty(reqData.password) ? reqData.password : "";

	if (is.empty(reqData.username)) {
	    errors.username = "Name field required";
	}

	if (is.empty(reqData.password)) {
	    errors.password = "password field cannot be empty";
	}

	return {
	    isValid: is.empty(errors),
	    errors
	}
    },
    createPlaylist: function(reqData) {
	var errors = {};

	// check title
	// check description
	// check channelid
	if (!is.existy(reqData.title)) {
	    errors.title = "You must submit a title"
	} else if (!(is.string(reqData.title) && !is.empty(reqData.title))) {
	    errors.title = "Title must be a non-empty string";
	}

	if (!is.existy(reqData.description)) {
	    errors.description = "You must submit a description"
	} else if (!(is.string(reqData.description) && !is.empty(reqData.description))) {
	    errors.description = "Description must be a non-empty string";
	}

	if (!is.existy(reqData.channel)) {
	    errors.channel = "You must submit a channel identifier"
	} else if (!(is.string(reqData.channel) && !is.empty(reqData.description))) {
	    errors.channel = "You must supply a channel identifier";
	}
	
	// check tags array
	if (is.existy(reqData.tags)) {
	    // checks to see if reqData.tags is an array, is not empty, and is full of all strings. if not, then return error message.
	    if (!(is.array(reqData.tags) && !is.empty(reqData.tags) && is.all.string(reqData.tags))) {
		errors.tags = "If you supply tags, it must be an array of all strings";
	    }
	}

	// check content array
	if (!is.existy(reqData.content)) {
	    errors.content = "You must supply a content array of objects";
	} else {
	    if (!(is.array(reqData.content) && is.all.object(reqData.content))) {
		errors.content = "You must supply a content array of objects";
	    } else {
		reqData.content.forEach(function(contentObject) {
		    if (!(is.existy(contentObject.title) && is.existy(contentObject.contentUrl))) {
			errors.content = "Invalid content object contents. content array should contain {title:string, contentUrl:string} objects";
		    } else {
			if (!(is.string(contentObject.title) && !is.empty(contentObject.title))) {
			    errors.content = "content title must be a non-empty string";
			}
			if (!is.url(contentObject.contentUrl)) {
			    errors.content = "content url is not a valid url";
			}
		    }
		});
	    }
	}

	// return errors, boolean no errors
	return {
	    isValid: is.empty(errors),
	    errors
	}
    },
    createChannel: function(reqData) {
	return {isValid: true};
    }
}
