const bcrypt = require('bcrypt');
const User = require('../models/user');
const  comparePassword  = require('../helpers/auth').comparePassword;
const jwt = require('jsonwebtoken');



const test = (req, res) => {
    res.json('test is working');
};

const registerUser = async (req, res) => {
    try {
        const { username, email, password, confirmpassword} = req.body;

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

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
 
        if (!user) {
            console.log('User not found:', email);
            return res.json({
                error: 'No user found',
            });
        }
 
        const isPasswordMatch = await comparePassword(password, user.password);
 
        if (isPasswordMatch) {
            return res.json({
                message: 'Login successful',
            });
        } else {
            return res.json({
                error: 'Incorrect password',
            });
        }
    } catch (error) {
        console.log('Error during login:', error);
        return res.json({
            error: 'An error occurred during login',
        });
    }
};



const forgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
      
      // Find the user in the database based on the provided email
      const user = await User.findOne({ email });
  
      if (!user) {
        console.log('User not found:', email);
        return res.status(404).json({ error: 'No user found' });
      }
  
      // Generate a JWT token with the user's ID and a secret key
      const token = jwt.sign({ id: user._id }, "jwt_secret_key", { expiresIn: "1h" });
  
      // Send the token via email or any other method you prefer
      // For demonstration purposes, sending as a JSON response
      res.json({ status: "Token generated", token });
    } catch (error) {
      console.error('Error in forgotPassword:', error);
      res.status(500).json({ status: "Internal Server Error" });
    }
  };
  

  const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.json({ error: 'User not found' });
      }
  
      // Log user and newPassword for debugging
      console.log('User:', user);
      console.log('New Password:', newPassword);
  
      // Update user's password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
  
      user.password = hashedPassword;
      await user.save();
  
      console.log('Updated User:', user);
      return res.json({ success: 'Password updated successfully!' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'An error  while resetting the password' });
    }
  };
  
module.exports = {
    test,
    registerUser,
    loginUser,  
    forgotPassword,
    resetPassword, 
};
