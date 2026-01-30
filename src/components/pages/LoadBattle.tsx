import { MenuBox } from "../common/menu-box/MenuBox"
import { BattleSelect } from "../common/BattleHistory/BattleSelect"
import type { Battle } from "../../../data/battleList";

interface LoadBattleProps {
    battles: Battle[];
}

function LoadBattle({ battles }: LoadBattleProps) {
  return (
    <MenuBox>
      <div>
        <h1>Battle History</h1>
        <div className="battle-list">
          {battles.map((battle) => (
            <BattleSelect key={battle.id} battle={battle} />
          ))}
        </div>
      </div>
    </MenuBox>
  );
}

export default LoadBattle