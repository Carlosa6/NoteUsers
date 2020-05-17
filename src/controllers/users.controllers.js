const userCtrl = {};

const User = require('../models/User');

userCtrl.createUser = async (req,res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User created');
    
}

userCtrl.getUsers = async (req,res) => {
    const users = await User.find()
    .then(usersItem => {
        const obj = {
            users:usersItem.map(item => {
                return{
                    id:item._id,
                    username:item.username,
                    createdAt:item.createdAt,
                    updateAt:item.updateAt
                }
            })
        }
        const users = obj.users;
        res.json(users);
    })
    
}

userCtrl.deleteUser = async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json('User deleted');
}

module.exports = userCtrl;