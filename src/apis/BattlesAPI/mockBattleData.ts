import type { Battle } from "../../types/battle";
import { characters } from "../CharacterAPI/characterData"

//find the character names
const getCharacter = (name: string) => {
    const character = characters.find(c => c.name === name);
    if (!character) throw new Error(`Character "${name}" not found.`);
    return character;
}
export const initialBattles: Battle[] = [
    {
        id: "1",
        name: "Battle of Gazumbo",
        description: "This was a doozy!",
        characters: [getCharacter("Master Chief"), getCharacter("Thomas Edison")]
    },
    {
        id: "2",
        name: "Azgard",
        description: "Holy smokes that wizard almost lived!",
        characters: [getCharacter("Nikola Tesla"), getCharacter("Thomas Edison")]
    },
    {
        id: "3",
        name: "Night City",
        description: "See you in the afterlife...",
        characters: [getCharacter("Genghis Khan"), getCharacter("Master Chief")]
    }
];