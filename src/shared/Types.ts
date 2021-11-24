import * as mongoDB from "mongodb";

export interface mongoClient {
    mongoClient: mongoDB.MongoClient
}

export interface mongoDb {
    mongoDataBase: mongoDB.Db
}

export interface user {
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
