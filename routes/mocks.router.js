const express = require('express');
const router = express.Router();
const mocksController = require('../controllers/mocks.controller'); // Importar el controlador

// Ruta para generar usuarios simulados
router.get('/mockingusers', mocksController.generateUsers);

// Ruta para generar mascotas simuladas (migrado desde el endpoint /mockingpets)
router.get('/mockingpets', mocksController.generatePets);

// Ruta para generar e insertar usuarios y mascotas simulados en la base de datos
router.post('/generateData', mocksController.generateAndInsertData);

module.exports = router;
