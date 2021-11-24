import { Router } from 'express';
import { Login, ChangePassword, PasswordReset, SignUp } from './auth.endpoints';
// User-route
const authRouter = Router();
authRouter.get('/login', Login);
authRouter.put('/change-password', ChangePassword);
authRouter.put('/reset-password', PasswordReset);
authRouter.post('/sign-up', SignUp);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/auth', authRouter)

export default baseRouter;
