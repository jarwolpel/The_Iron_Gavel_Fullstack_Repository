import type { Battle } from "../../types/battle";
import { initialBattles } from "./mockBattleData";

type BattlesResponseJSON = {message: String, data: Battle[]};
type BattleResponseJSON = {message: String, data: Battle};

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const BATTLE_ENDPOINT = "/credential";

export async function fetchBattles(): Promise<Battle[]> {
    const battleResponse: Response = await fetch(
        `${BASE_URL}${BATTLE_ENDPOINT}`
    );
    
    if(!battleResponse.ok) {
        throw new Error("Failed to fetch battles");
    }

    const json: BattlesResponseJSON = await battleResponse.json();
    return json.data;
}

export async function getBattleByID(battleID: string): Promise<Battle> {
    // const battle = initialBattles.find(id => id.id === battleID);
    const battleResponse: Response = await fetch(
        `${BASE_URL}${BATTLE_ENDPOINT}/${battleID}`
    )

    if(!battleResponse.ok) {
        throw new Error(`Failed to find battle with ID ${battleID}`);
    }

    const json: BattleResponseJSON = await battleResponse.json();
    return json.data;
}

export async function createBattleData(battle: Battle) {
    const createResponse: Response = await fetch(
        `${BASE_URL}${BATTLE_ENDPOINT}`,
        {
            method: "POST",
            body: JSON.stringify({...battle}),
            headers: {
                "Content-Type": "application/json",
            }
        }     
    );

    if(!createResponse.ok) {
        throw new Error(`Failed to create battle`);
    }

    const json: BattleResponseJSON = await createResponse.json();
    return json.data;
}

export async function updateBattleData(battle: Battle) {
    const createResponse: Response = await fetch(
        `${BASE_URL}${BATTLE_ENDPOINT}/${battle.id}`,
        {
            method: "PUT",
            body: JSON.stringify({...battle}),
            headers: {
                "Content-Type": "application/json",
            }
        }     
    );

    if(!createResponse.ok) {
        throw new Error(`Failed to update battle with id ${battle.id}`);
    }

    const json: BattleResponseJSON = await createResponse.json();
    return json.data;
}

export async function updateCharacterData(battle: Battle) {
    const battleIndex = initialBattles.findIndex(index => index.id === battle.id);

    if(battleIndex === -1) {
        throw new Error(`Failed to update battle data with id: ${battle.id}`);
    }

    initialBattles[battleIndex] = battle;
    return initialBattles[battleIndex];
}

export async function deleteCharacter(battleID: string) {
    const battleIndex = initialBattles.findIndex(index => index.id === battleID);

    if(battleIndex === -1) {
        throw new Error(`Failed to find battle with id: ${battleID}`);
    }

    delete initialBattles[battleIndex];
}