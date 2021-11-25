import * as mongoDB from "mongodb";
import { getConfig } from "../daos/Modal/DBConfig";
import { resetPassword } from "../daos/Modal/DBConfig";
import { sendEmail } from "../shared/emailServices";
import { randomStringGenerator } from "../shared/StringGenerator";

export async function resetPass(email: string): Promise<boolean | undefined> {
    const db: mongoDB.Db = getConfig();
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const newpassword: string = randomStringGenerator;
    console.log(newpassword)
    try {
        const response = await resetPassword(db, email, newpassword);
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
