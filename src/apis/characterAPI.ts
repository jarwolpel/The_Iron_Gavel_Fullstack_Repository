import type { Character } from "../types/character";
import { characters } from "./characterData";

export function fetchCharacters(): Character[] {
    return characters;
}

export function getCharacterByID(characterID: string): Character {
    const character = characters.find(id => id.id === characterID);

    if(!character) {
        throw new Error(`Failed to find character with ID ${characterID}`);
    }

    return character;
}

export async function updateUserData(character: Character) {
    const characterIndex = characters.findIndex(index => index.id === character.id);

    if(characterIndex === -1) {
        throw new Error(`Failed to update character data with id: ${character.id}`);
    }

    characters[characterIndex] = character;
    return characters[characterIndex];
}

export async function deleteUserCredentials(characterID: string) {
    const characterIndex = characters.findIndex(index => index.id === characterID);

    if(characterIndex === -1) {
        throw new Error(`Failed to find character with id: ${characterID}`);
    }

    delete characters[characterIndex];
}