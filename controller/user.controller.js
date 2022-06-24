const db = require('../db')
class UserController {
    async createUser(req,res){
        const {name, bthdate, password} = req.body;
        const newPerson = await db.query(`INSERT INTO users (full_name, bth_date, user_password) VALUES ($1, $2, $3) RETURNING*`,[name, bthdate, password]);
        res.json(newPerson);
    }
    async getUsers(res,rej){
        const users = await db.query(`SELECT * FROM users`);
        res.json(users.rows);
    }
    async getUser(res,rej){
        
    }
    async updateUsersData(res,rej){
        
    }
    async deleteUserData(res,rej){
        
    }
}
module.exports = new UserController(); 