import express from 'express';
// import { body } from 'express-validator';
import UserController from '../../Controllers/UserControllers/authController';
import  AuthMiddleware  from '../../Middleware/authMiddleware';

const router = express.Router();

router.post(
  '/signup',
  UserController.registerUser
);
router.get('/', AuthMiddleware, UserController.getAllUsers);
router.post('/login', UserController.loginUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);
router.get('/:id', AuthMiddleware, UserController.getUserByID);
// Apply the auth middleware to the user-data route
router.get('/api/profile', AuthMiddleware, UserController.getCurrentUser);

export default router;
