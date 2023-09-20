const { Pool } = require("pg");

const db = new Pool({
  user: "bekomeigag", // replace with you username
  host: "localhost",
  database: "data_todo",
  password: "",
  port: 5432,
});

module.exports = db;
