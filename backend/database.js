const monk = require("monk");
const db = monk(process.env.MONGO_URI || "mongodb://localhost:27017/brandweb");

module.exports = db;