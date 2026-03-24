import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { battleSchema } from "../validations/battleValidation";
import * as battleController from "../controllers/battleController";

/**
 * Routes determine which endpoints are made available, which controller
 * method to request if that route gets a corresponding request,
 * and invoke validation middleware if needed.
 */

const router: Router = express.Router();

router.get(
    "/battles",
    //requireAuth(), 
    battleController.getAllBattles
);

router.get(
    "/battles/:id",
    //requireAuth(),
    validateRequest(battleSchema), 
    battleController.getBattleById
);

router.post(
    "/battles",
    //requireAuth(), 
    validateRequest(battleSchema), 
    battleController.createBattle
);

// This won't be used until our Battle state machine is implemented
router.put(
    "/battles/:id",
    //requireAuth(), 
    validateRequest(battleSchema),
    battleController.updateBattle
);

router.delete(
    "/battles/:id",
    //requireAuth(), 
    battleController.deleteBattle
);

export default router;