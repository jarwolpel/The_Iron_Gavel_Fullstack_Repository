import type { BattleDTO } from "../../../types/battle";
import type { Character } from "../../../types/character";
import "./BattleSelect.css"
 
interface BattleSelectProps {
    battle: BattleDTO;
    characters: Character[];  // full character list to look up names from
}
 
export function BattleSelect({ battle, characters }: BattleSelectProps) {
    //character IDs to names, fall back to ID if not found
    const characterNames = battle.characters
        .map(id => characters.find(c => c.id === id)?.name ?? `Unknown (${id})`)
        .join(" vs ");
 
    return (
        <div className="battleItem">
            <h3>{battle.name}</h3>
            <p>{battle.description}</p>
            <p>{characterNames}</p>
            <input type="submit" value="Start Battle" />
        </div>
    )
}
 
export default BattleSelect;