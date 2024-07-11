import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../Models/AdminModels/authAdmin';

const JWT_SECRET = 'ollehnihtijAdmin';

class AdminController {
  static async registerAdmin(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      user = new User({
        username,
        email,
        password: hashedPassword,
      });

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      // console.error(error.message);
      res.status(500).send('Server error');
    }
  }

  static async getAllAdmins(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      // console.error(error.message);
      res.status(500).send('Server error');
    }
  }

  static async loginAdmin(req: Request, res: Response) {
    const { username, password } = req.body;

    try {
      // Find the user by username
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }

      // Check if the provided password matches the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }

      // Create a JSON Web Token (JWT) for the user
      const payload = {
        username: user.username
      };

      jwt.sign(payload, JWT_SECRET, { expiresIn: '3000h' }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      // console.error(error.message);
      res.status(500).send('Server error');
    }
  }
  static async getCurrentUser(req: any, res: any) {
    try {
      const username = req.userData.username; // Assuming your user ID is stored in the 'id' field
      const user = await User.findOne({ username: username });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User Profile', userData: user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error getting user' });
    }
  }
}

export default AdminController;

