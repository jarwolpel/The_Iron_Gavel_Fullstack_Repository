// This module manges the character selection for Creating a Battle
import { useLocation } from "react-router-dom";
import type { Character } from "../types/character";

export function useSelectedCharacters(): Character[] {
    const location = useLocation();
    const selected = location.state?.selectedCharacters;
    return Array.isArray(selected) ? selected : [];
}