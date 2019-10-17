var express = require('express');
var router = express.Router();
var validation = require('../../modules/validation');
const User = require('../../models/User')
const uuid = require('uuid/v4'); //use random uuid's for email validation tokens
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secretOrKey = require('../../config').secretOrKey;
const emailModule = require('../../modules/email');

//need to add jwt and passport support for generating tokens, and sending those tokens back from /login route

// assumed structure for properly formatted request body:
// {
//   username: "some username",
//   email: "some valid email",
//   password: "password",
//   passwordVerify: "password"
// }

router.post('/register', function(req, res, next) {
    const body = req.body;
    // verify passwords identical and email valid
    const {isValid, errors} = validation.register(body);

    // at least one error found, return errors object
    if (!isValid) {
	return res.status(400).json(errors);
    }

    // query the db for a user matching username, if none found, create a new user object and save to db.
    User.findOne({ username: body.username }).then(user => {
	if (user !== null) {
 	    return res.status(400).json({ username: "This username already exists in the database" });
	} else {
	    var token = uuid();
	    //create user and email token
	    var newUser = new User( {
		username: body.username,
		email: body.email,
		password: body.password,
		validated: false,
		validationToken: token
	    });

	    newUser.save()
		.then(user => res.json(user))
		.catch(err => console.log(err));

	    var subject = "Verify your ChannelHub Account";
	    var messageBody = `Please use the following link to verify your account, and then login to access ChannelHub: http://localhost:3000/api/accounts/validation?uid=${body.username}&token=${token}`
	    var htmlBody = `Please use the following link to verify your account, and then login to access ChannelHub: <a href="http://localhost:3000/api/accounts/validation?uid=${body.username}&token=${token}"> Verify your account! </a>`
 	    emailModule.testmail(subject, body, htmlBody);
	    //send nodemailer email
	}
    });
});

// assumed structure for a properly formatted request body:
// {
//    username: "username",
//    password: "password"
// }
router.post('/login', function(req, res, next) {
    const body = req.body;
    var {isValid, errors } = validation.login(body);

    if (!isValid) {
	res.status(400).json(errors)
    }
    User.findOne({ username: body.username }).then(user => {
	if (user === null) {
	    res.status(401).json({ success: false, error: "username and password combination incorrect" })
	} else {
	    bcrypt.compare(body.password, user.password, function(err, hashres) {
		if (err) throw err;
		if (hashres) {
		    res.status(200).json({ success: true, token: jwt.sign({username: user.username}, secretOrKey, {expiresIn: "1 day"} )})
		} else {
		    res.status(401).json({ success: false, error: "username and password combination incorrect" })
		}
	    });
	}
    });
});

// expects a url string formatted as follows:
// domain.com/api/accounts/validation?uid=[username]&token=[user_validation_token]
router.get('/validation', function(req, res, next) {
    var token = req.query.token;
    var uid = req.query.uid;
    
    User.findOne({ username: uid }).then(user => {
	if (user === null) {
	    res.status(400).json({ error: "token combination is invalid" })
	} else if (user.validationToken !== token) {
	    res.status(400).json({ error: "token combination is invalid" })
	} else {
	    user.validated = true;
	    user
		.save()
		.then(res.status(200).json({success: true}))
		.catch(err => console.log(err))
	}
    });
});
    
module.exports = router;
