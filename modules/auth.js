const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const secretOrKey = require('../config').secretOrToken;
const extractJWT = require('passport-jwt').ExtractJwt;

passport.use(new jwtStrategy({
    
