import type { Battle } from "../../../../data/battleList"

interface BattleSelectProps {
    battle: Battle;
}

export function BattleSelect({ battle }: BattleSelectProps) {
    return (
        <div className="battle-list-item">
            <h3>{battle.name}</h3>
            <p>{battle.description}</p>
        </div>
    )
}

export default BattleSelect