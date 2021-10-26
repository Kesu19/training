const dotenv = require('dotenv')
dotenv.config()
const sql = require('mssql')

const config = { 
  user: process.env.BDD_USER,
  password: process.env.BDD_MDP,
  server: process.env.BDD_SERVER,
  options: {
    port: 1433,
    database: process.env.BDD_NAME,
    instancename: process.env.BDD_HOST,
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