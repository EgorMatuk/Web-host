const db = require('../db');

class UserController{
    async createUser(req, res){
        const {name, bthdate, password} = req.body;
        const newPerson = await db.query(`INSERT INTO users (full_name, bth_date, user_password) VALUES ($1, $2, $3) RETURNING *`,[name, bthdate, password]);
        res.json(newPerson);
    }
    async getUsers(req, res){
        const users = await db.query(`SELECT * FROM users`);
        res.json(users.rows);
    }
    async getUser(req, res){
        const id = req.params.id;
        const user = await db.query(`SELECT * FROM users WHERE user_id = $1`,[id]);
        res.json(user.rows[0]);
    }
    async updateUserName(req, res){
        const {id, name} = req.body;
        const user = await db.query(`UPDATE users set full_name = $1 WHERE user_id = $2 RETURNING *`,[name , id]);
        res.json(user.rows[0]);
    }
    async updateUserPassword(req, res){
        const {id, password} = req.body;
        const user = await db.query(`UPDATE users SET user_password = $1 WHERE user_id = $2 RETURNING *`,[password , id]);
        res.json(user.rows[0]);
    }
    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query(`DELETE FROM users WHERE user_id = $1`,[id]);
        res.json(user.rows[0]);
    }
}

module.exports = new UserController();