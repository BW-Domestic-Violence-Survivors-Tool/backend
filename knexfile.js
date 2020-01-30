module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./characters.sqlite3"
    }
  },
  migrations: {
    directory: "./migrations"
  }
};