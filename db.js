const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "kthl8822",
  host: "localhost",
  port: 5432,
  database: "todolistapplication"
});

module.exports = pool;