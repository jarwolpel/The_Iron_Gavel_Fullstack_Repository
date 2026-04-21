import { useState } from "react";
import type { Character } from "../../../types/character";
import { CharacterCard } from "./CharacterCard";
import { characterService } from "../../../services/characterService";
// import { useAuth } from "@clerk/clerk-react";
import { useToggleFavorite } from "../../../hooks/useFavorites";
import "./CharacterdListDisplay.css";

// **Depresiated code saving for if I need it later**
// export function CharacterListDisplay({
//     characters,
//     updateCharacters,
// }: {
//     characters: Character[];
//     updateCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
// }) {
//     const [expandedId, setExpandedId] = useState<string | null>(null);

//     // Get user data from Clerk
//     const { getToken, isSignedIn } = useAuth();   

//     // Handle adding/removing characters to/from favorites
//     const handleCharacterFavoriteClick = async (characterClicked: Character): Promise<void> => {
//         if (!isSignedIn) {
//             console.log("Please sign in to save favorites!");
//             return;
//         }        
        
//         try {
//             const sessionToken = await getToken(); // Get token if signed in
//             const updatedCharacter = await characterService.toggleFavorite(
//                 characterClicked.id,
//                 !characterClicked.isFavorite,
//                 sessionToken
//             );

//             updateCharacters((old) =>
//                 old.map((c) => (c.isFavorite === updatedCharacter.isFavorite ? updatedCharacter : c))
//             );
//         } catch (error) {
//             console.error("Failed to toggle favorite:", error);
//         }
//     };


export function CharacterListDisplay({characters,updateCharacters,}: 
    {characters: Character[];
        updateCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
    }) {
    const [expandedId, setExpandedId] = useState<string | null>(null);


    const { toggleFavorite } = useToggleFavorite<Character>({
        updateItems: updateCharacters,
        getId: (c) => c.id,
        toggleFn: (character, token) =>
            characterService.toggleFavorite(character.id,!character.isFavourite,token),
        }
    );

    const characterListItems = characters.map((character) => {
        return (
            <CharacterCard
                key={character.id}
                character={character}
                isExpanded={character.id === expandedId}
                onTitleClick={() =>
                    setExpandedId(character.id !== expandedId ? character.id : null)
                }
                onSaveClick={() => toggleFavorite(character)}/>
        );
    });

    return <div className="character-list">{characterListItems}</div>;
}

