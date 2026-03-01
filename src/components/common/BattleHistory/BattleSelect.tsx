import type { Battle } from "../../../types/battle";
import "./BattleSelect.css"

interface BattleSelectProps {
    battle: Battle;
}

export function BattleSelect({ battle }: BattleSelectProps) {
    return (
        <div className="battleItem">
            <h3>{battle.name}</h3>
            <p>{battle.description}</p>
            <p>{battle.characters.map(c => c.name).join(" vs ")}</p>
            <input type="submit" value="Start Battle"></input>
        </div>
    )
}

export default BattleSelect