//This module retrieves battle data from the database 
import { initialBattles } from "../apis/BattlesAPI/mockBattleData";
import type { Battle } from "../types/battle";

// saving to memory, maybe will be changed to Firebase later 
let battleStore: Battle[] = [...initialBattles]

export const battleRepository = {
    getAll(): Battle[] {
            return battleStore;
        },

    findById(id: string): Battle | undefined {
        return battleStore.find(b => b.id === id);
    },

    save(battle: Battle): Battle {
        battleStore = [...battleStore, battle];
        return battle;
    },
    
    delete(id: string): void {
        battleStore = battleStore.filter(b => b.id !== id);
    }
};