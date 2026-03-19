import prisma from "../../../../prisma/client";
import type { Credential } from "../types/userCredentials";

export const fetchAllCredentials = async(): Promise<Credential[]> => {
    return prisma.credentials.findMany();
};

export const fetchCredentialById = async(id: number): Promise<Credential | null> => {
    const credential = prisma.credentials.findUnique({
        where: {
            id: id
        }
    });

    if(!credential){
        return null;
    } else {
        return credential;
    }
};

export const createCredential = async (credentialData: {
    username: string,
    password: string,
    email: string
}) : Promise<Credential> => {
    const newCredential: Credential = await prisma.credentials.create({
        data: {
            ...credentialData
        }
    });

    return newCredential;
}
