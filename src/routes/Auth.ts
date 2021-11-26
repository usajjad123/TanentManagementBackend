import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express'
import { ChangePasswordRequest, ResetPasswordRequest, SignupRequest } from 'src/shared/Types'
import { paramMissingError } from '../shared/constants';
import { userAuthentication, } from './UserAuth';
import { changePass } from './ChangePassword';
import { resetPass } from './ForgetPassword';
import { signUp } from './RegisterUser';

const { BAD_REQUEST, OK } = StatusCodes;

// (Make a separate Request Interface)
export async function UserAuth(req: Request, res: Response) {
    const email = req.headers.email;
    const password = req.headers.password;
    const response = await userAuthentication(email, password);
    if (!response) {
        return res.status(404).json({ message: 'there was an error' })
    } else {
        res.send(JSON.stringify(response))
        res.status(OK).end();
    }
}

export async function ChangePassword(req: ChangePasswordRequest, res: Response) {
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

export async function ResetPassword(req: ResetPasswordRequest, res: Response) {
    const { email } = req.body;
    await resetPass(email);
    res.status(OK).end();
}

export async function SignUp(req: SignupRequest, res: Response) {
    const user = req.body;
    await signUp(user);
    res.status(OK).end();
}