const express = require('express');
const businessRoutes = express.Router();
var MongoClient = require('mongodb').MongoClient;
const config = require('./database.js');

let Business = require('./business.model');

businessRoutes.route('/add').post(function (req, res) {
  console.log(req.body);
  console.log("hii");
  let business = new Business({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    phone:req.body.phone,
    address:req.body.address,
    course:req.body.course,
    college:req.body.course,
    year:req.body.year,
    percentage:req.body.percentage,
    companyName:req.body.companyName,
    from:req.body.from,
    to:req.body.to,
    designation:req.body.designation,
    LinkedIn:req.body.LinkedIn,
    Facebook:req.body.Facebook,
    GitHub:req.body.GitHub,
    hobbies:req.body.hobbies

  });

  MongoClient.connect(config.mongodb, function(err, db) {
    if (err) throw err;
    var dbo = db.db("crudapp");
    var myobj = req.body;
    dbo.collection("student").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
});

businessRoutes.route('/').get(function (req, res) {
    Business.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

businessRoutes.route('/users').get(function (req, res) {
  let id = req.query.id;
  Business.findOne({_id:req.query.id}, function (err, business){
      res.json(business);
  });
});

businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

businessRoutes.route('/delete').get(function (req, res) {
  console.log(req.query.id);
    Business.findOneAndDelete({_id:req.query.id}, function(err, business){
        if(err) 
          {
            console.log(err);
}

        else {
          console.log(business)
          res.send('Successfully removed');
        }
      
    });
});



module.exports = businessRoutes;