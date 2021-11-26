import { getConfig } from "../daos/Modal/DBConfig";
import * as mongoDB from "mongodb";
import { registerUser } from '../daos/Modal/DBConfig';

export const signUp = async (userInfo: any): Promise<boolean> => {
    const client: mongoDB.MongoClient = getConfig();
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const response: boolean = await registerUser(client, userInfo);
        return response;
    }
    catch {
        throw ("Error")
    }
}