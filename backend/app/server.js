// Dependencies
const express = require("express")
const index = express()
const routes = require('./controllers/routes.js')
const cors = require('cors')
// Core
index.get('/', function (request, response) {
});


/**
 * Server
 */
module.exports = class Server {
  constructor() {
    this.app = express()
    this.app.use(cors())
    this.run()
  }

  /**
   * Middleware
   */
  middleware() {
    this.app.use(express.json())
    
  }

  /**
   * Routes
   */
  routes() {
    new routes.crud.selectAllUser(this.app)
    new routes.crud.selectUser(this.app)
    new routes.crud.updateUser(this.app)
    new routes.crud.insertUser(this.app)
    new routes.crud.deletUser(this.app)
    // If route not exist
    this.app.use((req, res) => {

      res.status(404).json({
        code: 404,
        message: "Not Found"
      })
    })
  }

  run() {
    try {
      this.middleware()
      this.routes()
      const port = process.env.PORT || 4000
      this.app.listen(port)
      console.log(`Your port is ${port}`)
    } catch (e) {
      console.error(`[ERROR] Server -> ${e}`)
    }
  }
}