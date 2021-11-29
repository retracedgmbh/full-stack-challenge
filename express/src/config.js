const path = require("path");
const envPath = path.resolve(__dirname, ".env");

require("dotenv").config({ path: envPath });

const host = process.env.HOST || "0.0.0.0";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const user = process.env.PG_USER;
const password = process.env.PG_PASSWORD;
const database = process.env.PG_DATABASE;
const pgHost = process.env.PG_HOST;
const pgPort = process.env.PG_PORT;

module.exports = {
  host,
  port,
  pg: {
    host: pgHost,
    port: pgPort,
    user,
    password,
    database,
  },
};
