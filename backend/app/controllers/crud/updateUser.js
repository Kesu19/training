const sql = require("mssql");
const { poolPromise } = require("../../db.js")



module.exports = class updateUser{
    constructor(app) {
        this.app = app
        this.run()
    }

    async middleware() {
        this.app.get(`/crud/updateUser`, async (req, res) => {
                const pool = await poolPromise
                const updateUser = `UPDATE utilisateurs SET mdp = ${req.query.mdp} WHERE id = ${req.query.id}`
                const modifyUser = await pool.request().query(updateUser)
                console.log("Je suis laaaaaaaaaaaaaaaa")
                res.status(200).json(modifyUser)
            })
        
    }

    run() {
        this.middleware()
    }
}