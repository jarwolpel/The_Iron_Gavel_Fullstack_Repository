import { useState } from "react";
import type { Character } from "../../../types/character";
import { CharacterCard } from "./CharacterCard";
import "./CharacterdListDisplay.css";

export function CharacterListDisplay({
    characters,
    updateCharacters,
}: {
    characters: Character[];
    updateCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}) {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    // Handle adding/removing characters to/from favorites
    const handleCharacterFavoriteClick = (characterClicked: Character): void => {
        updateCharacters((oldCharacterState) =>
            oldCharacterState.map((character) => {
                if (character.id === characterClicked.id) {
                    let newFavorite = !character.isFavorite;
                    return { ...character, isFavorite: newFavorite };
                } else {
                    return character;
                }
            })
        );
    };

    const characterListItems = characters.map((character) => {
        return (
            <CharacterCard
                character={character}
                // Check if this character's ID matches the expandedId
                isExpanded={character.id === expandedId}
                onTitleClick={() => {
                    character.id !== expandedId ? setExpandedId(character.id) : setExpandedId(null);
                }}
                onSaveClick={() => {
                    handleCharacterFavoriteClick(character);
                }}
                key={character.id}
            />
        );
    });

    return <div className="character-list">{characterListItems}</div>;
}

