const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user', 'guest'], default: 'user' },
    pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }] // Relación con mascotas
});

module.exports = mongoose.model('User', userSchema);
