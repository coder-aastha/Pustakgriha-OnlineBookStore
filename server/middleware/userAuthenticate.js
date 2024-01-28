const jwt = require('jsonwebtoken');
const User= require('../models/user');

const authenticateUser= async (req, res , next) => {
    try{
        const token = req.header('Authorization').repalce('Bearer', '');
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findone({_id:decoded._id,'tokens.token':token});

        if (!user){
            throw new Error('User not Found');
        }
        req.user=user;
        req.token=token;
        next();
    }catch(error){
        console.error('Authentication error:', error.message);
        res.status(401).send('unauthorized:Invalid token');
    }
};

module.exports = authenticateUser;