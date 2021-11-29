const { Pool } = require("pg");
const {
  pg: { user, password, database, host, port },
} = require("../config");

const pool = new Pool({
  host,
  port,
  user,
  password,
  database,
});

module.exports = pool;
