const sql = require("mssql");
const { poolPromise } = require("../../db.js")
const cors = require('cors')


module.exports = class deletUser{
    constructor(app) {
        this.app = app
        this.run()
    }

    async middleware() {
        this.app.get(`/crud/deletUser`,cors(), async (req, res) => {
                try {
                    const pool = await poolPromise
                    const deletUser = `DELETE FROM utilisateurs WHERE id =  ${req.query.id}`
                    const User = await pool.request().query(deletUser)
                    console.log("Utilisateur supprimer")
                    console.log()
                    res.status(200).json(User)
                } catch (error) {
                    console.error(error)
                }

            })
        
    }






    run() {
        this.middleware()
    }
}