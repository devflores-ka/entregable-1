const faker = require('faker');
const bcrypt = require('bcrypt');

const MockingService = {
    // Generar usuarios simulados
    generateUsers: (quantity) => {
        const users = [];
        for (let i = 0; i < quantity; i++) {
            const hashedPassword = bcrypt.hashSync(faker.internet.password(), 10); // Contraseña encriptada
            users.push({
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: hashedPassword,
                role: faker.random.arrayElement(['admin', 'user', 'guest']),
                pets: [] // Array vacío para mascotas
            });
        }
        return users;
    },

    // Generar mascotas simuladas
    generatePets: (quantity = 10) => {
        const pets = [];
        for (let i = 0; i < quantity; i++) {
            pets.push({
                name: faker.name.firstName(),
                type: faker.random.arrayElement(['dog', 'cat', 'bird']),
                age: faker.random.number({ min: 1, max: 15 })
            });
        }
        return pets;
    }
};

module.exports = MockingService;
