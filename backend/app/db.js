const dotenv = require('dotenv')
dotenv.config()
const sql = require('mssql')

const config = { 
  user: 'test',
  password: 'Azerty1',
  server: 'localhost',
  options: {
    port: 1433,
    database: 'test',
    instancename: 'SQLEXPRESS',
    encrypt: false
  }
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}