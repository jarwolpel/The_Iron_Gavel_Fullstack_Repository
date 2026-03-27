// This module controls the state for characters
import { useState, useEffect } from "react";
import { characterRepository } from "../repositories/characterRepository";
import type { Character } from "../types/character";
 
export function useCharacterState() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
 
    useEffect(() => {
        try {
            const data = characterRepository.getAll();
            setCharacters(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load characters");
        } finally {
            setLoading(false);
        }
    }, []);
 
    return { characters, loading, error };
}