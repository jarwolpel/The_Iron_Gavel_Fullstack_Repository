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
    async getAll(): Promise <BattleDTO[]> {
            return fetchBattles();
        },

    async findByID(id: string): Promise<BattleDTO | undefined> {
        try {
            return await getBattleByID(id)
        } catch {
            return undefined;
        }
    },

    async save(battle: Omit<BattleDTO, "id">): Promise<BattleDTO> {
        return createBattleData(battle);
    },

    async update(battle: BattleDTO): Promise<BattleDTO> {
        return updateBattleData(battle);
    },
    
    async delete(id: string): Promise<void> {
        return deleteBattle(id);
    },
};