import type { BattleDTO } from "../../types/battle";
// import { initialBattles } from "./mockBattleData";

type BattlesResponseJSON = {message: String, data: BattleDTO[]};
type BattleResponseJSON = {message: String, data: BattleDTO};

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const BATTLE_ENDPOINT = "/battles";

export async function fetchBattles(sessionToken?: string|null): Promise<BattleDTO[]> {
    // include bearer authorization if the user is signed in and a token is passed to the function
    const battleResponse: Response = await fetch(
        `${BASE_URL}${BATTLE_ENDPOINT}`,
        sessionToken? {
            headers: {
                Authorization: `Bearer ${sessionToken}`,
            }   
        } : undefined
    );
    
    if(!battleResponse.ok) {
        throw new Error("Failed to fetch battles");
    }

    const json: BattlesResponseJSON = await battleResponse.json();
    return json.data;
}

export async function getBattleByID(battleID: string, sessionToken?: string|null): Promise<BattleDTO> {
    // const battle = initialBattles.find(id => id.id === battleID);
    const battleResponse: Response = await fetch(
        `${BASE_URL}${BATTLE_ENDPOINT}/${battleID}`,
        sessionToken? {
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        } : undefined
    );

    if(!battleResponse.ok) {
        throw new Error(`Failed to find battle with ID ${battleID}`);
    }

    const json: BattleResponseJSON = await battleResponse.json();
    return json.data;
}

export async function createBattleData(battle: Omit<BattleDTO, "id">, sessionToken: string): Promise<BattleDTO> {
    const createResponse: Response = await fetch(
        `${BASE_URL}${BATTLE_ENDPOINT}`,
        {
            method: "POST",
            body: JSON.stringify({...battle}),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionToken}`
            },
        }     
    );

    if(!createResponse.ok) {
        throw new Error(`Failed to create battle`);
    }

    const json: BattleResponseJSON = await createResponse.json();
    return json.data;
}

export async function updateBattleData(battle: BattleDTO, sessionToken: string): Promise<BattleDTO> {
    const updateResponse: Response = await fetch(
        `${BASE_URL}${BATTLE_ENDPOINT}/${battle.id}`,
        {
            method: "PUT",
            body: JSON.stringify({...battle}),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionToken}`
            },
        }     
    );

    if(!updateResponse.ok) {
        throw new Error(`Failed to update battle with id ${battle.id}`);
    }

    const json: BattleResponseJSON = await updateResponse.json();
    return json.data;
}

export async function deleteBattle(battleID: string, sessionToken: string): Promise<void> {
    const deleteResponse: Response = await fetch(
        `${BASE_URL}${BATTLE_ENDPOINT}/${battleID}`,
        { 
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${sessionToken}`
            } 
        }
    );

    if(!deleteResponse.ok) {
        throw new Error(`Failed to delete battle with id ${battleID}`);
    }
}

// unused functions, will save in case it breaks things
// export async function updateCharacterData(battle: Battle): Promise<Battle> {
//     const updateResponse: Response = await fetch()
//     const battleIndex = initialBattles.findIndex(index => index.id === battle.id);

//     if(battleIndex === -1) {
//         throw new Error(`Failed to update battle data with id: ${battle.id}`);
//     }

//     initialBattles[battleIndex] = battle;
//     return initialBattles[battleIndex];
// }

// export async function deleteCharacter(battleID: string) {
//     const battleIndex = initialBattles.findIndex(index => index.id === battleID);

//     if(battleIndex === -1) {
//         throw new Error(`Failed to find battle with id: ${battleID}`);
//     }

//     delete initialBattles[battleIndex];
// }