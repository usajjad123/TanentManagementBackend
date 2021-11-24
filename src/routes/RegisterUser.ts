import { clientConfig } from "../daos/Modal/DBConfig";
import * as mongoDB from "mongodb";
import { registerUser } from '../daos/Modal/DBConfig';
import { user } from '../shared/Types';

export const signUp = async (userInfo: user): Promise<boolean> => {
    const client: mongoDB.MongoClient = clientConfig();
    try {
        const response: boolean = await registerUser(client, userInfo);
        return response;
    }
    catch {
        throw ("Error")
    }
    finally {
        await client.close();
    }
}