import * as mongoDB from "mongodb";

export interface mongoClient {
    mongoClient: mongoDB.MongoClient
}

export interface mongoDb {
    mongoDataBase: mongoDB.Db
}
