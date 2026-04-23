// CreateBattle.tsx
import { useState } from "react";
import type { FormEvent } from "react";
import type { Character } from "../../types/character";
import { useNavigate } from "react-router-dom";
import { MenuBox } from "../common/menu-box/menuBox";
import { useSelectedCharacters } from "../../hooks/useSelectedCharacters";

interface CreateBattleProps {
    onBattleCreate: (
        name: string,
        description: string,
        characters: Character[],
        isSaved: boolean
    ) => Promise<void>;
}

function CreateBattle({ onBattleCreate }: CreateBattleProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const characters = useSelectedCharacters();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim() || characters.length !== 2) return;

    setSubmitting(true);
    setError(null);

    try {
        // isSaved: true tells the backend to create the UserBattle record
        await onBattleCreate(name, description, characters, true);
        navigate("/battles/battle-screen");
    } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to create battle");
    } finally {
        setSubmitting(false);
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
          {error && <p style={{ color: "red" }}>Error: {error}</p>}
          <input 
            type="submit" 
            value={submitting ? "Creating..." : "Start Battle"}
            disabled={submitting || characters.length !== 2} 
          />
        </form>
      </div>
    </MenuBox>
  );
}

export default CreateBattle;