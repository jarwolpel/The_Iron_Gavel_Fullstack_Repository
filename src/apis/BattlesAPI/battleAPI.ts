import type { Battle } from "../../types/battle";
import { initialBattles } from "./mockBattleData";

export function fetchBattles(): Battle[] {
    return initialBattles;
}

export function getBattleByID(battleID: string): Battle {
    const battle = initialBattles.find(id => id.id === battleID);

    if(!battle) {
        throw new Error(`Failed to find battle with ID ${battleID}`);
    }

    return battle;
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