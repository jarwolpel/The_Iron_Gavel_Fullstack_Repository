import { useState } from "react";
import type { Character } from "../../../types/character";
import { CharacterCard } from "./CharacterCard";
import { characterService } from "../../../services/characterService";
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
    const handleCharacterFavoriteClick = async (characterClicked: Character): Promise<void> => {
        try {
            const updatedCharacter = await characterService.toggleFavorite(
                characterClicked.id,
                !characterClicked.isFavorite
            );

            updateCharacters((old) =>
                old.map((c) => (c.id === updatedCharacter.id ? updatedCharacter : c))
            );
        } catch (error) {
            console.error("Failed to toggle favorite:", error);
        }
    };

    const characterListItems = characters.map((character) => {
        return (
            <CharacterCard
                key={character.id}
                character={character}
                isExpanded={character.id === expandedId}
                onTitleClick={() =>
                    setExpandedId(character.id !== expandedId ? character.id : null)
                }
                onSaveClick={() => handleCharacterFavoriteClick(character)}
            />
        );
    });

    return <div className="character-list">{characterListItems}</div>;
}

