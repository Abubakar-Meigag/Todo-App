const Pool = require("pg").Pool;

const pool = new Pool({
  PG_USER: "bekomeigag",
  PG_HOST: "localhost",
  PG_DATABASE: "todo",
  PG_PORT: 5432,
  PG_PASSWORD: "Cyf@3377441",
});

module.exports = pool;