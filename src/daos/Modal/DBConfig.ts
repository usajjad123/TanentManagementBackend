import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { user } from '../../shared/Types';

// globalVariables
let _client: mongoDB.MongoClient;

// Connection For Database
export async function connectDatabase() {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!);

    await client.connect();
    _client = client;
}

export const clientConfig = (): mongoDB.MongoClient => {
    return _client;
}

// SignUp MongoDatabase Function
export const registerUser = async (client: mongoDB.MongoClient, userInfo: user): Promise<boolean> => {
    const email = { email: userInfo.email }
    try {
        const response = await client.db('vendrDB').collection('users').findOne(email);
        if (response === null) {
            const userInsertionResponse = await client.db('vendrDB').collection('users').insertOne(userInfo);
            return true
        }
        return false;
    }
    catch {
        throw "Error";
    }
}

// Login MongoDb Function
export const authenticateUser = async (client: mongoDB.MongoClient, email: any, password: any) => {
    const response = await client.db('vendrDB').collection('users').findOne({ email: email, password: password })
    return response;
}

// ChangePassword MongoDb Funtion
export const changePassword = async (client: mongoDB.MongoClient, paramEmail: string, oldPassword: string, newPassword: string) => {
    try {
        const response = await client.db('vendrDB').collection('users').updateOne({ email: paramEmail, password: oldPassword }, { $set: { password: newPassword } });
        return response;
    } catch (er) {
        throw "Error";
    }
}

// ForgetPassword MongoDb Function

export const resetPassword = async (client: mongoDB.MongoClient, email: string, newPassword: string) => {
    try {
        const response = await client.db('vendrDB').collection('users').updateOne({ email }, { $set: { password: newPassword } });
        return response;
    }
    catch {
        throw "Error";
    }
}