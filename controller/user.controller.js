const db = require('../db')
class UserController {
    async createUser(req,res){
        const {name, bthdate, password} = req.body;
        const newPerson = await db.query(`INSERT INTO users (full_name, bth_date, user_password) VALUES ($1, $2, $3) RETURNING*`,
        [name, bthdate, password]);
        res.json(newPerson);
    }
    async getUsers(req,res){
        const users = await db.query(`SELECT * FROM users`);
        res.json(users.rows);
    }
    async getUser(req,res){
        const id = req.params.id;
        const users = await db.query(`SELECT * FROM users WHERE user_id = $1`,[id]);
        res.json(users.rows);
    }
    async updateUserData(req,res){
        const {id,name, bthdate, password} = req.body;
        const users = await db.query(`UPDATE users SET full_name = $1, bth_date = $2, user_password = $3 WHERE user_id = $4 RETURNING *`,
        [name, bthdate, password, id]);
        res.json(users.rows[0]);
    }
    async deleteUserData(req,res){
        const id = req.params.id;
        const users = await db.query(`DELETE FROM users WHERE user_id = $1`,[id]);
        res.json(users.rows);
    }
}
module.exports = new UserController(); 