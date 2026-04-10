//This module retrieves battle data from the database 
// import { initialBattles } from "../apis/BattlesAPI/mockBattleData";
import {
    fetchBattles,
    createBattleData,
    getBattleByID,
    updateBattleData,
    deleteBattle, 
} from "../apis/BattlesAPI/battleAPI";

import type { BattleDTO } from "../types/battle";
 
// let battleStore: Battle[] = [...initialBattles]

export const battleRepository = {
    async getAll(sessionToken?: string | null): Promise <BattleDTO[]> {
            return fetchBattles(sessionToken);
        },

    async findByID(id: string, sessionToken?: string | null): Promise<BattleDTO | undefined> {
        try {
            return await getBattleByID(id, sessionToken)
        } catch {
            return undefined;
        }
    },

    async save(battle: Omit<BattleDTO, "id">, sessionToken: string): Promise<BattleDTO> {
        return createBattleData(battle, sessionToken);
    },

    async update(battle: BattleDTO, sessionToken: string): Promise<BattleDTO> {
        return updateBattleData(battle, sessionToken);
    },
    
    async delete(id: string, sessionToken: string): Promise<void> {
        return deleteBattle(id, sessionToken);
    },
};