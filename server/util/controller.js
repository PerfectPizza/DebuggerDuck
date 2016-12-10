'use strict';
const db = require('../db/schemas.js');

require('dotenv').config({silent: true});

// Returns an object with a key of data
const buildResObj = function (data) {
  return {
    data: data
  }
}

module.exports = {

  user: {
    get: (req, res) => {
      console.log("----------req.user: ",req.user)
      db.User.findOne({fb_id: req.user.id}).exec()
        .then((user) => {
          res.status(200).send(user);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(400);
        })
    },
    loggedIn: (req, res) => {
      if (req.user.id) {
        res.send(true);
      } else {
        res.send(false);
      }

    },
    logout: (req, res) => {
      req.session.destroy();
      res.redirect('/');
    }
  },

  group: {
    // Group controller functions for GET
    get: (req, res) => {
      db.Group.find().exec()
        .then((groups) => {
          let response = buildResObj(groups);
          res.status(200).send(response);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(400);
        })
    },
    // Group controller functions for GET
    post: (req, res) => {
      // Look in the database to see if there is a Group with the given name already
      db.Group.findOne({name: req.body.data.groupName}).exec()
      .then((data) => {
        // If we don't get any data, add the request body into the database
        if(!data) {
          new db.Group({name: req.body.data.groupName}).save()
          .then((data) => {
            // Send a 201 status that it was completed
            res.sendStatus(201);
          })
          // Catch the error and log it in the server console
          .catch((err) => {
            console.error(err);
            res.sendStatus(400);
          })
        }
        else {
          // Send a 401 status and a message that the group is already added the database
          res.status(401).send('Group is already in the database.')
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },

  volunteer: {
    // Volunteer controller functions for GET
    get: (req, res) => {
      db.Order.find().exec()
        .then((volunteers) => {
          let response = buildResObj(volunteers);
          res.status(200).send(response);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(400);
        })
    },
    // Volunteer controller functions for POST
    post: (req, res) => {

      new db.Order({
        order_user: req.body.data.username,
        location: req.body.data.location,
        time: req.body.data.time,
        picture: req.body.data.picture,
        group_id: req.body.data.groupId,
        requests: req.body.data.requests
        orderNumber: req.body.data.orderNumber
      }).save()
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.sendStatus(400)
      })
    }
  },

  request: {
    // Request controller functions for POST
    //Data is posted in req.body
    post: (req, res) => {

      db.Order.findOneAndUpdate(
         {_id:req.body.data.volunteerId},
         {$push: { requests:{user_id: req.body.data.username, picture: req.body.data.picture, text:req.body.data.text} } }
        )
      .then((data) => {
        //console.log('Data sent to DB.', data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.sendStatus(400)
      })
      //console.log('Request POST', req);

   }
}, 

  logout: {
    get: (req, res) => {
      res.sendStatus(200); 

     }
   },  
  
}  