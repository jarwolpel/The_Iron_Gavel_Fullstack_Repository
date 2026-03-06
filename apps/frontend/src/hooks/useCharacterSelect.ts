//This module manages character selection for Favorites
import { useState } from "react";
import type { Character } from "../types/character";

export function useCharacterSelect() {
    const [selected, setSelected] = useState<Character[]>([]);

    const toggleSelect = (character: Character) => {
        setSelected(prev => {
            const isSelected = prev.some(c => c.id === character.id);
            if (isSelected) return prev.filter(c => c.id !== character.id);
            if (prev.length === 2) return prev;
            return [...prev, character];
        });
    };

    const canSelect = (character: Character): boolean => {
        return selected.some(c => c.id === character.id) || selected.length < 2;
    };

    const clear = () => setSelected([]);

    return { selected, toggleSelect, canSelect, clear };
}