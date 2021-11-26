import * as mongoDB from "mongodb";
import { getConfig } from "../daos/Modal/DBConfig";
import { resetPassword } from "../daos/Modal/DBConfig";
import { sendEmail } from "../shared/emailServices";
import { randomStringGenerator } from "../shared/StringGenerator";

export async function resetPass(email: string): Promise<boolean | undefined> {
    const client: mongoDB.MongoClient = getConfig();
    const newpassword: string = randomStringGenerator;
    try {
        const response = await resetPassword(client, email, newpassword);
        if (response.modifiedCount === 1) {
            const emailResponse = await sendEmail(email, newpassword);
            return true;
        }
        return false;
    }
    catch {
        throw "Error"
    }
}
