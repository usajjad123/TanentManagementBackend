import * as mongoDB from "mongodb";
import { clientConfig } from "../daos/Modal/DBConfig";
import { resetPassword } from "../daos/Modal/DBConfig";

async function resetPass(email: string): Promise<boolean | undefined> {
    const client: mongoDB.MongoClient = await clientConfig();
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const newpassword: string = 'randomStringGenerator';
    try {
        const response = await resetPassword(client, email, newpassword);
        if (response!.modifiedCount === 1) {
            await sendEmail(email, newpassword);
            return true;
        }
        return false;
    }
    catch (er) {
        console.error(er);
    }
    finally {
        await client.close();
    }
}