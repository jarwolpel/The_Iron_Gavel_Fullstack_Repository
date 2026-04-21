import express, {Router} from "express";
// TODO: Add validation schema and middleware
// import { validateRequest } from "../middleware/validate";
// import { termSchema } from "../validations/termValidation";
import * as userBattleController from "../controllers/userBattleController";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { requireAuth } from "@clerk/express";
import { validateRequest } from "../middleware/validate";
import { userBattleSchema } from "../validations/userBattleValidation";

const router: Router = express.Router();

router.post(
    "/battles/:battleId/saved",
    // only authenticated users may access these routes
    requireAuth(),
    findOrCreateUser, 
    validateRequest(userBattleSchema),
    userBattleController.createUserBattle
);

router.delete(
    "/battles/:battleId/saved",
    requireAuth(),
    findOrCreateUser,
    validateRequest(userBattleSchema),
    userBattleController.deleteUserBattle
);

export default router;