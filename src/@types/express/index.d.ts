import { user } from '../../shared/Types'
declare module 'express' {
  export interface Request {
    headers: {
      email: user["email"];
      password: user["password"];
    }
  }
  
}