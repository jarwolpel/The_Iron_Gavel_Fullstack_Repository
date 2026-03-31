import { useEffect, useState } from 'react';
import './Battlescreen.css';
import { fetchCharacters } from '../../../apis/CharacterAPI/characterAPI';
import EventsLog from './BattleScreenEventsLog/EventsLog';
import type { Character } from '../../../types/character';

interface CharacterCardStats {
    name: string;
    health: number;
    damage: number;
    armor: number;
}

export function BattleScreen() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;
        const load = async () => {
            try {
                const data = await fetchCharacters();
                if (!cancelled) setCharacters(data);
            } catch (err) {
                if (!cancelled)
                    setError(err instanceof Error ? err.message : "Failed to load characters");
            } finally {
                if (!cancelled) setLoading(false);
            }
        };
        load();
        return () => { cancelled = true; };
    }, []);

    return (
        <>
            <div className='char-container'>
                <div className="character-panel">
                    {loading && <p>Loading characters...</p>}
                    {error && <p style={{ color: "red" }}>Error: {error}</p>}
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
                <EventsLog />
            </div>
        </>
    );
}

const CharacterCard: React.FC<CharacterCardStats> = ({ name, health, damage, armor }) => {
    return (
        <div className="char-frame default-container-scheme">
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