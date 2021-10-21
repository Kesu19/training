const sql = require("mssql");
const { poolPromise } = require("../../db.js")
const cors = require("cors");


module.exports = class selectAllUser {
    constructor(app) {
        this.app = app
        this.run()
    }

    async middleware() {
        this.app.get(`/crud/selectAllUser`,cors(), async (req, res) => {
                const pool = await poolPromise
                const User = "select * from dbo.utilisateurs"
                const allUser = await pool.request().query(User)
            res.status(200).json(allUser.recordsets[0])
        })
        
    }



    run() {
        this.middleware()
    }
}