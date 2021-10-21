const selectAllUser = require("./crud/selectAllUser")
const selectUser = require("./crud/selectUser")
const insertUser = require("./crud/insertUser")
const updateUser = require("./crud/updateUser")
const deletUser = require("./crud/deletUser")

module.exports = {
    crud: {
      selectAllUser,selectUser,insertUser,updateUser,deletUser
    }
}