import React from 'react';
import './Battlescreen.css';
import { characters } from "../../../../data/characterList";
import EventsLog from './BattleScreenEventsLog/EventsLog';

interface CharacterCardStats {
    name: string;
    health: number;
    damage: number;
    armor: number;
}


export function BattleScreen( ){
    return (
        <>
            <div className="battle-panel">
                <div className="character-panel">
                    {characters.map((character, index) => (
                        <CharacterCard
                            key={index}
                            name={character.name}
                            health={character.health}
                            damage={character.damage}
                            armor={character.armor}
                            />
                        ))}
                </div>
            </div>    
            <EventsLog/>   
        </>    
    )
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

export default BattleScreen;