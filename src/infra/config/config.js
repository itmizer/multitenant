const config = require('config')

const dbConfig = config.get('db.prod')

module.exports = {
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.type,
  dialectOptions: {
    options: {
      enableArithAbort: true,
      requestTimeout: 100000,
      useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: function (field, next) { // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
        return next()
      },
    },
  }
}
