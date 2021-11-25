import { getConfig } from "../daos/Modal/DBConfig";
import * as mongoDB from "mongodb";
import { registerUser } from '../daos/Modal/DBConfig';
import { user } from '../shared/Types';

export const signUp = async (userInfo: user): Promise<boolean> => {
    const db: mongoDB.Db = getConfig();
    try {
        const response: boolean = await registerUser(db, userInfo);
        return response;
    }
    catch {
        throw ("Error")
    }
}