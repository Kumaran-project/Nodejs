const Sequelize = require("sequelize").Sequelize;

/** CHANGE USERNAME AND PASSWORD */
const sequelize = new Sequelize("node-complete", "bala", "secret", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;git commit 
