const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Info
let Info = new Schema({
  song_name: {
    type: String
  },
  description: {
    type: String
  },
  size: {
    type: Number
  },
  image_url: {
    type: String
  },
  song_url: {
    type: String
  },
  extra: {
    type: String
  }
},{
    collection: 'info'
});

module.exports = mongoose.model('Info', Info);