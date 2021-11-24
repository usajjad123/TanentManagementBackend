import { clientConfig } from '../daos/Modal/DBConfig';
import { authenticateUser } from '../daos/Modal/DBConfig';
import { user } from '../shared/Types';
// import { randomStringGenerator } from '../shared/StringGenerator';
export async function userAuthentication(email: any, password: any) {
    const client = clientConfig();
    if (email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
        try {
            const response = await authenticateUser(client, email, password);
            console.log(response, "generated response")
            const token = 'randomStringGenerator';
            const loginResponse = {
                uid: response!.uid,
                userName: response!.firstname + "" + response!.lastname,
                userToken: token,
                password: response!.password
            }
            if (response) {
                return loginResponse;
            }

            return null;
        }
        catch (er) {
            console.error(er);
        }
        finally {
            await client.close();
        }
        return false
    }
}