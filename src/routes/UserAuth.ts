import { getConfig } from '../daos/Modal/DBConfig';
import { authenticateUser } from '../daos/Modal/DBConfig';
import { randomStringGenerator } from '../shared/StringGenerator';
export async function userAuthentication(email: any, password: any) {
    const client = getConfig();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    if (email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            const response = await authenticateUser(client, email, password);
            const token = randomStringGenerator;
            if (response === null) {
                return null
            }
            if (response) {
                const loginResponse = {
                    uid: response.uid,
                    userName: response.firstname + "" + response.lastname,
                    userToken: token,
                    password: response.password
                }
                return loginResponse;
            }
            return null;
        }
        catch (er) {
            console.error(er);
        }
        return null
    }
}