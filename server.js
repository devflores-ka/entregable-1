const express = require('express');
const app = express();
const mocksRouter = require('./routes/mocks.router');
const connectDB = require('./config/db.config');

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json());

// Usar el router bajo la ruta base /api/mocks
app.use('/api/mocks', mocksRouter);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
