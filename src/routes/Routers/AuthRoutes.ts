import { Router } from 'express';
import { ChangePassword, ResetPassword, SignUp, UserAuth } from '../Auth';

export const authRouter = Router();

// Auth-Routers common for all
authRouter.get('/login', UserAuth);
authRouter.put('/change-password', ChangePassword);
authRouter.put('/reset-password', ResetPassword);
authRouter.post('/sign-up', SignUp);