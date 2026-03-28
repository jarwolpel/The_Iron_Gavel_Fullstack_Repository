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

export async function createNewUser(user: Credentials): Promise<Credentials> {
    const credentialResponse: Response = await fetch(
        `${BASE_URL}${CREDENTIAL_ENDPOINT}`,
        {
            method: "POST",
            body: JSON.stringify({...user}),
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
    if (!credentialResponse.ok) {
        throw new Error("Failed to post credentials");
    }

    const json: CredentialResponseJSON = await credentialResponse.json();
    return json.data;
}


// DEPRICATED CODE
// import type { Credentials } from "../../types/userCredentials";
// import { userCredentials } from "./mockUserCredentials";

// export function fetchCredentials(): Credentials[] {
//     return userCredentials;
// }

// export function getUserByID(userID: number): Credentials {
//     const user = userCredentials.find(id => id.id === userID);

//     if(!user) {
//         throw new Error(`Failed to find user with ID ${userID}`);
//     }

//     return user;
// }

// export function createNewUser(user: Credentials) {
//     userCredentials.push(user);
// }

// export async function updateUserData(user: Credentials) {
//     const userIndex = userCredentials.findIndex(index => index.id === user.id);

//     if(userIndex === -1) {
//         throw new Error(`Failed to update user data with id: ${user.id}`);
//     }

//     userCredentials[userIndex] = user;
//     return userCredentials[userIndex];
// }

// export async function deleteUserCredentials(userID: number) {
//     const userIndex = userCredentials.findIndex(index => index.id === userID);

//     if(userIndex === -1) {
//         throw new Error(`Failed to fund user data with id: ${userID}`);
//     }

//     delete userCredentials[userIndex];
// }
