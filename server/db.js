const { Pool } = require("pg");

const db = new Pool({
  user: "bekomeigag",
  host: "localhost",
  database: "data_todo",
  password: "",
  port: 5432,
});

module.exports = db;
