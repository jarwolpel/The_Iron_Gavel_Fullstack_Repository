import type { Character } from "./character";

export interface Battle {
    id: string;
    name: string;
    description: string;
    characters: Character[];
}