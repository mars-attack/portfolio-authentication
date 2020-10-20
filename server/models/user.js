let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');


// create a model class
let User = mongoose.Schema({
  username: 
  {
    type: String,
    default: '',
    trim: true,
    required: 'username is required' // message
  },

  email:
  {
    type: String,
    default: '',
    trim: true,
    required: 'email address is required'
  },

  displayName:
  {
    type: String,
    default: '',
    trim: true,
    required: 'display name is required'
  },

  created:
  {
    type: Date,
    default: Date.now()
  },

  updated:
  {
    type: Date,
    default: Date.now()
  }

},
{
  collection: "users"
});

// configure options for User Model

let options = ({missingPasswordError: 'Wrong/Missing Password'});
User.plugin(passportLocalMongoose, options);


module.exports.Model = mongoose.model('User', User);