const sql = require("mssql");
const { poolPromise } = require("../../db.js")
const cors = require('cors')


module.exports = class insertUser {
    constructor(app) {
        this.app = app
        this.run()
    }

    async middleware() {
        this.app.post(`/crud/insertUser`,cors(), async (req, res) => {
            const pool = await poolPromise
            console.log(req.body)
            const newUser = `insert INTO dbo.utilisateurs(nom, prenom, login, mdp) values('${req.body.nom}','${req.body.prenom}','${req.body.login}','${req.body.mdp}')`
            console.log(newUser);
            const ajouter = await pool.request().query(newUser)
            res.status(200).json(ajouter)
        })

    }




    run() {
        this.middleware()
    }
}
