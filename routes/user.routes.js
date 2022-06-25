const Router = require('express');
const router = new Router();
const UserController = require('../controller/user.controller');

router.post('/user',UserController.createUser);
router.get('/user',UserController.getUsers);
router.get('/user/:id',UserController.getUser);
router.put('/user',UserController.updateUserData);
router.delete('/user/:id',UserController.deleteUserData);


module.exports = router;