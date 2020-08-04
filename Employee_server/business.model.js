const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Business = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  myid: {
    type: Number
  },
  email: {
    type: String
  },
   address: {
    type: String
  },
  phone: {
    type: Number
  },
  course: {
    type: String
  },
  college: {
    type: String
  },
  year: {
    type: String
  },
  percentage: {
    type: String
  },
  companyName: {
    type: String
  },
  from: {
    type: Date
  },
  to: {
    type: Date
  },
  designation: {
    type: String
  },
  linkedIn: {
    type: String
  },
  GitHub: {
    type: String
  },
  Facebook: {
    type: String
  },
  hobbies: {
    type: String
  }
},{
    collection: 'student'
});

module.exports = mongoose.model('Business', Business);