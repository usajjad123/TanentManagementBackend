import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { user } from '../../shared/Types';

// returns connected Database
let _db: mongoDB.Db;

// For Connecting Database
module.exports.connectDatabase = async () => {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!);

    await client.connect();
    console.log('Connected')
    const db: mongoDB.Db = client.db(process.env.DB_NAME);
    _db = db;
}

// Returns Connected Database Object
export const getConfig = (): mongoDB.Db => {
    return _db
}

// SignUp MongoDb Function
export const registerUser = async (db: mongoDB.Db, userInfo: user): Promise<boolean> => {
    const email = { email: userInfo.email }
    try {
        const response = await db.collection('users').findOne(email);
        if (response === null) {
            const userInsertionResponse = await db.collection('users').insertOne(userInfo);
            return true
        }
        return false;
    }
    catch {
        throw "Error";
    }
}

// Login MongoDb Function
export const authenticateUser = async (db: mongoDB.Db, email: string, password: string) => {
    const response = await db.collection('users').findOne({ email: email, password: password })
    return response;
}

// ChangePassword MongoDb Funtion
export const changePassword = async (db: mongoDB.Db, paramEmail: string, oldPassword: string, newPassword: string) => {
    try {
        const response = await db.collection('users').updateOne({ email: paramEmail, password: oldPassword }, { $set: { password: newPassword } });
        console.log(response,'response')
        return response;
    } catch (er) {
        throw "Error";
    }
}

// ForgetPassword MongoDb Function
export const resetPassword = async (db: mongoDB.Db, email: string, newPassword: string) => {
    try {
        const response = await db.collection('users').updateOne({ email }, { $set: { password: newPassword } });
        return response;
    }
    catch {
        throw "Error";
    }
}