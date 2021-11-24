import { IUser } from '@entities/User';
import { user } from '../../shared/Types'
declare module 'express' {
  export interface Request {
    body: {
      user: IUser;
      email: user["email"];
      password: user["password"];
      newpassword: user["password"];
      userInfo:user
    };
    headers: {
      email: user["email"];
      password: user["password"];
    }
  }
}
