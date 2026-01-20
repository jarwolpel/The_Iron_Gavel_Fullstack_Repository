import React from 'react';
import './Battlescreen.css';

interface CharacterCardStats {
    name: string;
    health: number;
    damage: number;
    armor: number;
}

const CharacterCard: React.FC<CharacterCardStats> = ({ name, health, damage, armor }) => {
    return (
        <div className="char-frame">
            <h2>{name}</h2>
                <div className="stats">
                <p>Health: {health}</p>
                <p>Damage: {damage}</p>
                <p>Armor: {armor}</p>
            </div>
        </div>
    );
};

export default CharacterCard;