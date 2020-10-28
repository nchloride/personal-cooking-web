const monk = require("monk");
const db = monk("mongodb://localhost:27017/brandweb");

module.exports = db;