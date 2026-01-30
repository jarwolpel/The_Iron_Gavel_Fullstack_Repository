// CreateBattle.tsx
import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { MenuBox } from "../common/menu-box/MenuBox";

interface CreateBattleProps {
  onBattleCreate: (name: string, description: string) => void;
}

function CreateBattle({ onBattleCreate }: CreateBattleProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() && description.trim()) {
      onBattleCreate(name, description);
      setName("");
      setDescription("");
      navigate("/load-battle"); 
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
          <input type="submit" value="Create Battle" />
        </form>
      </div>
    </MenuBox>
  );
}

export default CreateBattle;