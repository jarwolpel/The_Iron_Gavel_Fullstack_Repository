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

// define routes that Express will listen for requests to
// define method that will be invoked when route gets a request
router.get("/battles", battleController.getAllBattles);
router.get("/battles/:id", battleController.getBattleById);

// methods including data invoked validateRequest middleware
// tested against battleSchema
router.post("/battles", validateRequest(battleSchema), 
    battleController.createBattle);

router.put("/battles/:id", validateRequest(battleSchema),
    battleController.updateBattle);

router.delete("/battles/:id", battleController.deleteBattle);

export default router;