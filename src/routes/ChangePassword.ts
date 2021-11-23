import { clientConfig, changePassword } from '../daos/Modal/DBConfig';
import * as mongoDB from "mongodb";

export async function changePass(email: string, oldPassword: string, newPassword: string): Promise<boolean | undefined> {
    const client: mongoDB.MongoClient = await clientConfig();
    try {
        const response = await changePassword(client, email, oldPassword, newPassword);
        if (response!.modifiedCount === 0) {
            return false;
        }
        return true;
    }
    catch (er) {
        console.error(er);
    }
    finally {
        await client.close();
    }
}