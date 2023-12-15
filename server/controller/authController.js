const bcrypt = require('bcrypt');
const User = require('../models/user');


const test = (req, res) => {
    res.json('test is working');
};

const registerUser = async (req, res) => {
    try {
        const { username, email, password,confirmpassword} = req.body;

        if (!username || !email || !password || !confirmpassword) {
            return res.json({
                error: 'All fields are required',
            });
        }

        if ( password.length < 6) {
            return res.json({
                error: 'Password  should be at least 6 characters long',
            });
        }

        if (password !== confirmpassword) {
            return res.json({
                error: "Passwords don't match",
            });
        }

        const exist = await User.findOne({ email });

        if (exist) {
            return res.json({
                error: 'Email is already taken',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.json({
            error: 'An error occurred during registration',
        });
    }
};




module.exports = {
    test,
    registerUser,
   
    
    
};
