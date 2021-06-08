const mongoose = require('mongoose')

const { Schema } = mongoose

const userSchema = new Schema({
  name: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  birthPlace: { type: String, required: true },
  birthDate: { type: Date, required: true },
  parentName: { type: String, required: true },
  createdBY: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date }
}, {
  toJSON: { virtuals: true },
  timestamps: true
})

module.exports = mongoose.model('User', userSchema)
