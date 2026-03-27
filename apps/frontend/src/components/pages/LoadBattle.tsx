import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { MenuBox } from "../common/menu-box/menuBox"
import { BattleSelect } from "../common/BattleHistory/BattleSelect"
// import type { Battle } from "../../types/battle"; 
import { useBattles } from "../../hooks/useBattles";
import { useCharacterState } from "../../hooks/useCharacterState";


// interface LoadBattleProps {
//     battles: Battle[];
// }

function LoadBattle() {
  const navigate = useNavigate();
  const { battles, loading: battlesLoading, error: battlesError } = useBattles();
  const { characters, loading: charactersLoading, error: charactersError } = useCharacterState();

  const loading = battlesLoading || charactersLoading;
  const error = battlesError || charactersError;
    
  const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      navigate("/battles/battle-screen"); 
  };

  return (
    <MenuBox>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Battle History</h1>

          {loading && <p>Loading battles...</p>}
          {error && <p style={{color: "red"}}>Error: {error}</p>}
          {!loading && !error && battles.length === 0 && (
            <p>No battles found</p>
          )}

          <div className="battle-list">
            {battles.map((battle) => (
              <BattleSelect 
                key={battle.id} 
                battle={battle}
                characters={characters} 
                />
            ))}
          </div>
        </div>
      </form>
    </MenuBox>
  );
}

export default LoadBattle