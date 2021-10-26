const sql = require("mssql");
const { poolPromise } = require("../../db.js")
const cors = require('cors')


module.exports = class updateUser{
    constructor(app) {
        this.app = app
        this.run()
    }

    async middleware() {
        this.app.get(`/crud/updateUser`, async (req, res) => {
                console.log(req.query.mdp)
                const pool = await poolPromise
                const updateUser = `UPDATE utilisateurs SET mdp = '${req.query.mdp}' WHERE id = ${req.query.id}`
                const modifyUser = await pool.request().query(updateUser)
                res.status(200).json(modifyUser)
            })
        
    }

    run() {
        this.middleware()
    }
}