const Sequelize = require("sequelize");

const db = {};

const sequelize = new Sequelize("prueba", "root", "", {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;