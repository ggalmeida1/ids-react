const User = require('../models/user.model');

module.exports = {
    index (req, res) {
        res.json({message: 'Hello world from Controller User!'});
    },

    async create (req, res) {
        const {name_user, email_user, type_user, password_user} = req.body;

        let data = {};

        let user = await User.findOne({email_user});
        if(!user) {
            data = {name_user, email_user, type_user, password_user};
            user = await User.create(data); //if not async will return user empty
            
            return res.status(200).json(user);
        } else {
            return res.status(500).json(user);
        }
    },
};