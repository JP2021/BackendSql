const User = require('../models/User.js');

module.exports={

    async index(req, res){
        const user = await User.findAll();
         return res.json(user);
    },
    async store(req,res){

      
        const {name,email} = req.body;

        const userExists= await User.findOne({ where: {email: req.body.email}});

        if (userExists) {
    
          return res.status(400).json({error: 'User already exists',})
        }

        const user = await User.create({name,email});

        return res.json(user);
    }
};