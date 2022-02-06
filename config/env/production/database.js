const parse = require('pg-connection-string').parse
const config = parse(process.env.DATABASE_URL)

module.exports = ({ env }) => {
  const { host, port, user, password, database } = config;
  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        username: user,
        password,
        database,
        ssl: { rejectUnauthorized: false }
      }
    }
  }
}