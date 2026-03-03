// CreateBattle.tsx
import { useState } from "react";
import type { FormEvent } from "react";
import type { Character } from "../../types/character";
import { useNavigate } from "react-router-dom";
import { MenuBox } from "../common/menu-box/menuBox";
import { useSelectedCharacters } from "../../hooks/useSelectedCharacters";

interface CreateBattleProps {
  onBattleCreate: (name: string, description: string, characters: Character[]) => void;
}

function CreateBattle({ onBattleCreate }: CreateBattleProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const characters = useSelectedCharacters();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() && description.trim() && characters.length === 2) {
      onBattleCreate(name, description, characters);
      navigate("/battles/battle-screen"); 
    }
  };

  return (
    <MenuBox>
      <div>
        <h1>Create Battle</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Battle Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Battle Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <h3>Selected Characters</h3>
            {/* Insert the selected characters in this p tag */}
            <p>
              {characters.length > 0
                ? characters.map(c => c.name).join(" vs ")
                : "No characters selected"
              }
            </p>
          </div>
          <input type="submit" value="Start Battle" />
        </form>
      </div>
    </MenuBox>
  );
}

export default CreateBattle;