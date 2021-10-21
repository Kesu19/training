const sql = require("mssql");
const { poolPromise } = require("../../db.js")



module.exports = class selectUser {
    constructor(app) {
        this.app = app
        this.run()
    }

    async middleware() {
        this.app.get(`/crud/selectUser`, async (req, res) => {
                const pool = await poolPromise
                const selectUser = `select * from dbo.utilisateurs where id = ${req.query.id}`
                const user = await pool.request().query(selectUser)
            res.status(200).json(user)
        })
        
    }




    run() {
        this.middleware()
    }
}