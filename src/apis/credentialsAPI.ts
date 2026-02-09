import type { Credentials } from "../types/userCredentials";
import { userCredentials } from "./mockUserCredentials";

export function fetchCredentials(): Credentials[] {
    return userCredentials;
}

export function getUserByID(userID: number): Credentials {
    const user = userCredentials.find(id => id.id === userID);

    if(!user) {
        throw new Error(`Failed to find user with ID ${userID}`);
    }

    return user;
}

export async function updateUserData(user: Credentials) {
    const userIndex = userCredentials.findIndex(index => index.id === user.id);

    if(userIndex === -1) {
        throw new Error(`Failed to update user data with id: ${user.id}`);
    }

    userCredentials[userIndex] = user;
    return userCredentials[userIndex];
}

export async function deleteUserCredentials(userID: number) {
    const userIndex = userCredentials.findIndex(index => index.id === userID);

    if(userIndex === -1) {
        throw new Error(`Failed to fund user data with id: ${userID}`);
    }

    delete userCredentials[userIndex];
}
