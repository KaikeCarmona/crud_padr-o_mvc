const Sequelize = require("sequelize")

const bancodados = new Sequelize("sequelize1", "root", "", {
    host: "localhost",
    port: "3306",
    dialect: "mysql",
});

module.exports = bancodados