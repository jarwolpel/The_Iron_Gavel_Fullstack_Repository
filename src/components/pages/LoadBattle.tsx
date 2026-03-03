import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { MenuBox } from "../common/menu-box/menuBox"
import { BattleSelect } from "../common/BattleHistory/BattleSelect"
import type { Battle } from "../../types/battle";

interface LoadBattleProps {
    battles: Battle[];
}

function LoadBattle({ battles }: LoadBattleProps) {
  const navigate = useNavigate();
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        navigate("/battles/battle-screen"); 
    };

  return (
    <MenuBox>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Battle History</h1>
          <div className="battle-list">
            {battles.map((battle) => (
              <BattleSelect key={battle.id} battle={battle} />
            ))}
          </div>
        </div>
      </form>
    </MenuBox>
  );
}

export default LoadBattle