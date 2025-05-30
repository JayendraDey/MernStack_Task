import express from 'express';
import { login, signup } from '../controller/authController.js';

export const router = express.Router();

router.post('/login', login );

router.post('/signup', signup);


