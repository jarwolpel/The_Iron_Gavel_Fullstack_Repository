import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { battleSchema } from "../validations/battleValidation";
import * as battleController from "../controllers/battleController";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";

/**
 * Routes determine which endpoints are made available, which controller
 * method to request if that route gets a corresponding request,
 * and invoke validation middleware if needed.
 */

const router: Router = express.Router();

// Loads all Battle History
router.get(
    "/battles",
    findOrCreateUser,
    battleController.getAllBattles
);

// Load a battle from Battle History
router.get(
    "/battles/:id",
    findOrCreateUser,
    validateRequest(battleSchema), 
    battleController.getBattleById
);

// Create Battle
router.post(
    "/battles",
    requireAuth(), 
    validateRequest(battleSchema), 
    battleController.createBattle
);

// Edit Battle stats, this won't be used until our Battle state machine is implemented
router.put(
    "/battles/:id",
    requireAuth(), 
    validateRequest(battleSchema),
    battleController.updateBattle
);

// Optional if I want to add a delete button
router.delete(
    "/battles/:id",
    requireAuth(), 
    validateRequest(battleSchema),
    battleController.deleteBattle
);

export default router;