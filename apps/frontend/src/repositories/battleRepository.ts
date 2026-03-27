//This module retrieves battle data from the database 
// import { initialBattles } from "../apis/BattlesAPI/mockBattleData";
import {
    fetchBattles,
    createBattleData,
    getBattleByID,
    updateBattleData,
    deleteBattle, 
} from "../apis/BattlesAPI/battleAPI";

import type { Battle } from "../types/battle";
 
// let battleStore: Battle[] = [...initialBattles]

export const battleRepository = {
    async getAll(): Promise <Battle[]> {
            return fetchBattles();
        },

    async findByID(id: string): Promise<Battle | undefined> {
        try {
            return await getBattleByID(id)
        } catch {
            return undefined;
        }
    },

    async save(battle: Omit<Battle, "id">): Promise<Battle> {
        return createBattleData(battle);
    },

    async update(battle: Battle): Promise<Battle> {
        return updateBattleData(battle);
    },
    
    async delete(id: string): Promise<void> {
        return deleteBattle(id);
    },
};