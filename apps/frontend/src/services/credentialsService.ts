import * as credentialAPI from "../apis/UserCredsAPI/credentialsAPI";
import type { Credentials } from "../types/userCredentials";

export async function fetchCredentials() {
    const credentials = await credentialAPI.fetchCredentials();
    return credentials;
}

export async function addUser(user: Credentials, sessionToken: string) {
    await credentialAPI.createNewUser(user, sessionToken);
}