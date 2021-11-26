import { Router } from 'express';
import { UserAuth, ChangePassword, ResetPassword, SignUp } from './Auth';
// User-route
const authRouter = Router();

authRouter.get('/login', UserAuth);
authRouter.put('/change-password', ChangePassword);
authRouter.put('/reset-password', ResetPassword);
authRouter.post('/sign-up', SignUp);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/auth', authRouter)

export default baseRouter;
