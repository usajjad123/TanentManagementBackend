import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { user } from '../../shared/Types';

// returns connected Database
// eslint-disable-next-line no-var
var _client: mongoDB.MongoClient;

// For Connecting Database
module.exports.connectDatabase = async () => {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!);

    await client.connect();
    console.log('Connected')
    _client = client;
}

// Returns Connected Database Object
export const getConfig = (): mongoDB.MongoClient => {
    return _client
}

// SignUp MongoDb Function
export const registerUser = async (client: mongoDB.MongoClient, userInfo: user): Promise<boolean> => {
    const email = userInfo
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
export const authenticateUser = async (client: mongoDB.MongoClient, email: string, password: string) => {
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