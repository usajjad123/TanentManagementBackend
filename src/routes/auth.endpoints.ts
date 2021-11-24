import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { paramMissingError } from '../shared/constants';
import { userAuthentication } from './Login';
import { changePass } from './ChangePassword';
import { resetPass } from './ForgetPassword';
import { signUp } from './RegisterUser';
import { user } from '@shared/Types';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function Login(req: Request, res: Response) {
    const email = req.headers.email
    const password = req.headers.password
    const response = await userAuthentication(email, password);
    if (!response) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    res.send(JSON.stringify(response))
    res.status(OK).end();
}

export async function ChangePassword(req: Request, res: Response) {
    const { email } = req.body;
    const { password } = req.body;
    const { newpassword } = req.body;
    const response = await changePass(email, password, newpassword);
    if (!response) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    res.send(response)
    res.status(OK).end();
}

export async function PasswordReset(req: Request, res: Response) {
    const { email } = req.body;
    console.log(email)
    await resetPass(email);
    res.status(OK).end();
}

export async function SignUp(req: Request, res: Response) {
    const userInfo = req.body;
    console.log(userInfo, "From request");
    await signUp(userInfo);
    res.status(OK).end();
}
