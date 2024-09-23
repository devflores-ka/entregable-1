const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mocksDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a la base de datos MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1); // Cerrar la aplicación si no se puede conectar
    }
};

module.exports = connectDB;
