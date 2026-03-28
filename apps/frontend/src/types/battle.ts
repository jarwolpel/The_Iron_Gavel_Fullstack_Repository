import type { Character } from "./character";
 
//returned by the backend / stored in DB
export interface BattleDTO {
    id: string;
    name: string;
    description: string;
    characters: string[];   //character IDs only
}
 
//used in the frontend after characters are resolved
export interface Battle {
    id: string;
    name: string;
    description: string;
    characters: Character[]; //full character objects
}