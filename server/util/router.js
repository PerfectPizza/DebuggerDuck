'use strict';
const router = require('express').Router();
const passport = require('../server.js');

// Require the controller functions for the router
const controller = require('./controller');

// User the router to direct GET requests for /login
// router.get('/login', passport.authenticate('facebook'));

// User the router to direct GET requests for /login
//router.get('/login/facebook/return', controller.login.oauth);

//User ther outer to direct GET requests for /login
//router.get('/profile', controller.login.profile);

router.get('/user', controller.user.get);
router.get('/user/loggedin', controller.user.loggedIn);
router.get('/user/logout', controller.user.logout);

// Use the router to direct GET and POST requests for /group
router.get('/group', controller.group.get);
router.post('/group', controller.group.post);

// Use the router to direct GET and POST requests for /volunteer
router.get('/volunteer', controller.volunteer.get);
router.post('/volunteer', controller.volunteer.post);

// Use the router to direct POST requests for /request
router.post('/request', controller.request.post);

// User the router to direct GET requests for /logout
router.get('/logout', controller.logout.get);

module.exports = router;