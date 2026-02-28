import type { Battle } from "../../../types/battle";

interface BattleSelectProps {
    battle: Battle;
}

export function BattleSelect({ battle }: BattleSelectProps) {
    return (
        <div className="battle-list-item">
            <h3>{battle.name}</h3>
            <p>{battle.description}</p>
            <p>{battle.characters.map(c => c.name).join(" vs ")}</p>
        </div>
    )
}

export default BattleSelect