import { getConfig, changePassword } from '../daos/Modal/DBConfig';
import * as mongoDB from "mongodb";

export async function changePass(email: string, oldPassword: string, newPassword: string): Promise<boolean | undefined> {
    const db: mongoDB.Db = getConfig();
    console.log(db,'db')
    try {
        const response = await changePassword(db, email, oldPassword, newPassword);
        console.log(response)
        if (response.modifiedCount === 0) {
            return false;
        }
        return true;
    }
    catch {
        throw "Error";
    }
}