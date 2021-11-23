import { clientConfig } from "../daos/Modal/DBConfig";
import * as mongoDB from "mongodb";
import { registerUser } from '../daos/Modal/DBConfig'
interface user {
    uid
    :
    string
    firstname
    :
    string
    lastname
    :
    string
    email
    :
    string
    password
    :
    string
    phoneno
    :
    string
}
export const signUp = async (userInfo: user): Promise<boolean> => {
    const client: mongoDB.MongoClient = await clientConfig();
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