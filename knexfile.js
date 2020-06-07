// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    //local host
    connection: "postgres:///paperTraildb"
  },
  production: {
    client: "pg",
    connection: "some-heroku-database-url-we-will-connect-to"
  }
};
