import { useState, useEffect } from "react";
import { battleRepository } from "../repositories/battleRepository";
import type { BattleDTO } from "../types/battle";
import type { Character } from "../types/character";
import { useAuth } from "@clerk/clerk-react";

export function useBattles(
    dependencies: unknown[] = [],
    filterFn?: ((battle: BattleDTO) => Boolean) | null,
) {
    const { getToken, isSignedIn, isLoaded } = useAuth();  
    const [battles, setBattles] = useState<BattleDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isLoaded) return;  // wait for Clerk to finish init
        
        let cancelled = false;
        const load = async () => {
            setLoading(true);
            setError(null);
            try {
                const sessionToken = isSignedIn ? await getToken() : null;
                let data = await battleRepository.getAll(sessionToken);
                if (!cancelled && filterFn) {
                    data = data.filter(filterFn);
                }
                if (!cancelled) setBattles([...data]);
            } catch (err) {
                if (!cancelled)
                    setError(err instanceof Error ? err.message : "Failed to load battles");
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        load();
        return () => { cancelled = true; };
    }, [isLoaded, isSignedIn, ...dependencies]);  

    const createBattle = async (
    name: string,
    description: string,
    characters: Character[],
    isSaved: boolean = false       
): Promise<void> => {
    try {
        const sessionToken = isSignedIn ? await getToken() : null;
        console.log("isSignedIn:", isSignedIn);
        console.log("sessionToken:", sessionToken);  // is this null?
        if (!sessionToken) throw new Error("Must be signed in to create a battle");
        const characterIds = characters.map((c) => String(c.id));
        const newBattle = await battleRepository.save(
            { name, description, characters: characterIds, isSaved },
            sessionToken
        );
        setBattles((prev) => [...prev, newBattle]);
    } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to create battle");
    }
};

    return { battles, loading, error, createBattle };
}