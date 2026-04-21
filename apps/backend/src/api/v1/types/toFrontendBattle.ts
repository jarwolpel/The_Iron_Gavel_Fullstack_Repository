import { FrontendBattle} from "@shared/types/frontend-battle";
import { BattleWithUsers } from "./battleWithUsers";

/**
 *  This method serves to abstract the many-to-many relationship between
 * Terms and Users so that the frontend only receives relevant data. 
 *  */
export function toFrontendBattle(
    backendBattle: BattleWithUsers, 
    userId?: string | null
): FrontendBattle {
    const {id, name, description, characters } = backendBattle;

    return {
        id: id,
        name: name,
        description: description,
        characters: characters,
        isSaved: (userId != null) && 
            backendBattle.userBattles.some(bt => bt.userId === userId)
    }
}