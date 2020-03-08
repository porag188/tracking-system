const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import { Schema } from 'mongoose';

const testSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const test = mongoose.model('test', testSchema);

module.exports = test;
