//This module controls the state for battles 
import { useState } from "react";
import { battleService } from "../services/battleService";
import type { Battle } from "../types/battle";
import type { Character } from "../types/character";

export function useBattles() {
    const [battles, setBattles] = useState<Battle[]>(() => battleService.getAll());

    const createBattle = (name: string, description: string, characters: Character[]) => {
        const newBattle = battleService.create(name, description, characters);
        setBattles(prev => [...prev, newBattle]);
    };

    return { battles, createBattle };
}