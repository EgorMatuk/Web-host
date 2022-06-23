class UserController {
    async createUser(req,res){
        const {user} = req.body;
        console.log(`${user} IS HERE!!!!!`);
        res.json("ok");
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