class UserController {
    async createUser(req,res){
        const {name} = req.body;
        console.log(name);
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