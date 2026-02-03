import type { Character } from "../../../../data/characterList";
import CheckmarkIcon  from "../../../assets/icons/Checkmark.svg";
import BoxIcon  from "../../../assets/icons/box.svg";
import "./CharacterCard.css";

export function CharacterCard({
    character,
    isExpanded,
    onTitleClick,
    onSaveClick,
}: {
    character: Character;
    isExpanded: boolean;
    onTitleClick: () => void;
    onSaveClick: () => void;
}) {
    return (
        <div className="character-card">
            <div className="character-card-top">
                {/* Handle title click to expand/collapse */}
                <h3 onClick={onTitleClick}>{character.name}</h3>

                {/* Toggle the favorite icon when clicked */}
                <button onClick={onSaveClick}>
                    {character.isFavorite ? (
                        <img src={CheckmarkIcon} width={20} height={20} alt="Checkmark Icon" />
                    ) : (
                        <img src={BoxIcon} width={20} height={20} alt="Box Icon" />
                    )}
                </button>
            </div>


            {/* Conditional rendering of the expanded details */}
            {isExpanded ? (
                <div className="character-details">
                    <p>
                        <strong>Health:</strong> {character.health}
                        <img src={character.healthimg} alt="Health" width={20} />
                    </p>
                    <p>
                        <strong>Damage:</strong> {character.damage}
                        <img src={character.swordimg} alt="Damage" width={20} />
                    </p>
                    <p>
                        <strong>Armor:</strong> {character.armor}
                        <img src={character.shieldimg} alt="Armor" width={20} />
                    </p>
                </div>
            ) : null}
        </div>
    );
}
