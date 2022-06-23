const db = require('../db')
class UserController {
    async createUser(req,res){
        const {name, bthdate, password} = req.body;
        const newPerson = await db.query(`SELECT * FROM users`)
        res.json(newPerson);
    }
    async getUsers(res,rej){

    }
    async getUser(res,rej){
        
    }
    async updateUsersData(res,rej){
        
    }
    async deleteUserData(res,rej){
        
    }
}
module.exports = new UserController(); 