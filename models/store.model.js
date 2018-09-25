import mongoose from 'mongoose';

/* eslint func-names: 0 */

const Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');

const StoreSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  StoreURI: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Geocode: {
    type: String, //geocode type to add,
    required: true,
  },
  Address: {
    type: String,
  },
  Types: {
    type: String, 
  },
  Items: {
    type: [String], 
  },

}, {
  timestamps: true,
});


const Store = mongoose.model('Store', StoreSchema);


export default Store;
