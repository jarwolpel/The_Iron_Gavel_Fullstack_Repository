//This module controls the state for battles 
import { useState, useEffect } from "react";
import { battleRepository } from "../repositories/battleRepository";
import type { 
    // Battle, 
    BattleDTO 
} from "../types/battle";
import type { Character } from "../types/character";

export function useBattles() {
    const [battles, setBattles] = useState<BattleDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //fetch the battles from the db
    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await battleRepository.getAll();
                if (!cancelled) setBattles(data);
            } catch (err) {
                if (!cancelled)
                    setError(err instanceof Error ? err.message : "Failed to load battles");
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        load();
        return () => {cancelled = true; };
    }, []);

    // POST to the db & sync local state
    const createBattle = async (
        name: string, 
        description: string, 
        characters: Character[]
    ): Promise<void> => {
        try {
            const characterIds = characters.map((c) => String(c.id));
            const newBattle = await battleRepository.save({name, description, characters: characterIds});
            setBattles((prev) => [...prev, newBattle])
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to create battle");
        }
        // const newBattle = battleService.create(name, description, characters);
        // setBattles(prev => [...prev, newBattle]);
    };

    return { battles, loading, error, createBattle };
}