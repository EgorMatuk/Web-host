const db = require('../db')
class UserController {
    async createUser(req,res){
        const {name, bthdate, password} = req.body;
        const newPerson = await db.query(`INSERT INTO users(name, bthdate, password) VALUES ($1, $2, $3) RETURNING*`,[name, bthdate, password]);
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