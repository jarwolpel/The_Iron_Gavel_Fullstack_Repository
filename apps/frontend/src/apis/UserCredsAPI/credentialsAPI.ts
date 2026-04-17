import type { Credentials } from "../../types/userCredentials";

type CredentialsResponseJSON = {message: String, data: Credentials[]};
type CredentialResponseJSON = {message: String, data: Credentials};

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const CREDENTIAL_ENDPOINT = "/credential";

export async function fetchCredentials(): Promise<Credentials[]> {
    const credentialResponse: Response = await fetch(
        `${BASE_URL}${CREDENTIAL_ENDPOINT}`
    );

    if (!credentialResponse.ok) {
        throw new Error("Failed to fetch credentials");
    }

    const json: CredentialsResponseJSON = await credentialResponse.json();
    return json.data;
}

export async function getUserByID(credentialID: number): Promise<Credentials> {
    const credentialResponse: Response = await fetch(
        `${BASE_URL}${CREDENTIAL_ENDPOINT}/${credentialID}`
    );
    if (!credentialResponse.ok) {
        throw new Error("Failed to fetch credentials");
    }

    const json: CredentialResponseJSON = await credentialResponse.json();
    return json.data;
}

export async function createNewUser(user: Credentials, sessionToken: string): Promise<Credentials> {
    const credentialResponse: Response = await fetch(
        `${BASE_URL}${CREDENTIAL_ENDPOINT}`,
        {
            method: "POST",
            body: JSON.stringify({...user}),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionToken}`
            }
        }
    );
    if (!credentialResponse.ok) {
        throw new Error("Failed to post credentials");
    }

    const json: CredentialResponseJSON = await credentialResponse.json();
    return json.data;
}