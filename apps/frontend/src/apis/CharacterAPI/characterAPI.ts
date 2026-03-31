import type { Character } from "../../types/character";
//import { characters } from "./characterData";

type CharactersResponseJSON = { message: string; data: Character[] };
type CharacterResponseJSON = { message: string; data: Character };

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const CHARACTERS_ENDPOINT = "/characters";

export async function fetchCharacters(): Promise<Character[]> {
  const response: Response = await fetch(`${BASE_URL}${CHARACTERS_ENDPOINT}`);

  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }

  const json: CharactersResponseJSON = await response.json();
  return json.data;
}

export async function getCharacterByID(characterID: string): Promise<Character> {
  const response: Response = await fetch(`${BASE_URL}${CHARACTERS_ENDPOINT}/${characterID}`);

  if (!response.ok) {
    throw new Error(`Failed to find character with ID ${characterID}`);
  }

  const json: CharacterResponseJSON = await response.json();
  return json.data;
}

export async function searchCharacters(query: string): Promise<Character[]> {
  // if empty query, fetch all
  const url = query.trim()
    ? `${BASE_URL}${CHARACTERS_ENDPOINT}/search?q=${query}`
    : `${BASE_URL}${CHARACTERS_ENDPOINT}`;

  const response: Response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to search characters with query "${query}"`);
  }

  const json: CharactersResponseJSON = await response.json();
  return json.data;
}

export async function toggleFavorite(id: string, isFavorite: boolean): Promise<Character> {
  const response: Response = await fetch(`${BASE_URL}${CHARACTERS_ENDPOINT}/${id}/favorite`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ isFavorite }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update favorite status for character with id ${id}`);
  }

  const json: CharacterResponseJSON = await response.json();
  return json.data;
}

// Old code 
// export function fetchCharacters(): Character[] {
//     return characters;
// }

// export function getCharacterByID(characterID: string): Character {
//     const character = characters.find(id => id.id === characterID);

//     if(!character) {
//         throw new Error(`Failed to find character with ID ${characterID}`);
//     }

//     return character;
// }

// export async function updateCharacterData(character: Character) {
//     const characterIndex = characters.findIndex(index => index.id === character.id);

//     if(characterIndex === -1) {
//         throw new Error(`Failed to update character data with id: ${character.id}`);
//     }

//     characters[characterIndex] = character;
//     return characters[characterIndex];
// }

// export async function deleteCharacter(characterID: string) {
//     const characterIndex = characters.findIndex(index => index.id === characterID);

//     if(characterIndex === -1) {
//         throw new Error(`Failed to find character with id: ${characterID}`);
//     }

//     delete characters[characterIndex];
// }