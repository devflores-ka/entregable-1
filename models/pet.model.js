const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['dog', 'cat', 'bird'], required: true },
    age: { type: Number, required: true }
});

module.exports = mongoose.model('Pet', petSchema);
