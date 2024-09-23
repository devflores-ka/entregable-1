const MockingService = require('../services/mocking.service');

// Controlador para generar usuarios
const generateUsers = (req, res) => {
    const { quantity } = req.query;
    const numUsers = parseInt(quantity, 10) || 10; // Por defecto genera 10 usuarios
    const users = MockingService.generateUsers(numUsers);
    res.json(users);
};

// Controlador para generar mascotas
const generatePets = (req, res) => {
    const pets = MockingService.generatePets();
    res.json(pets);
};

// Controlador para generar e insertar datos en la base de datos
const generateAndInsertData = async (req, res) => {
    const { users, pets } = req.body;
    try {
        const generatedUsers = MockingService.generateUsers(users);
        const generatedPets = MockingService.generatePets(pets);

        // Inserción en la base de datos usando los modelos
        await require('../models/user.model').insertMany(generatedUsers);
        await require('../models/pet.model').insertMany(generatedPets);

        res.status(201).json({ generatedUsers, generatedPets });
    } catch (error) {
        res.status(500).json({ message: 'Error al generar los datos', error });
    }
};

module.exports = {
    generateUsers,
    generatePets,
    generateAndInsertData
};
