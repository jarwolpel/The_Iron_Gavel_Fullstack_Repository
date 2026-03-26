import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import * as characterController from "../controllers/characterController";
import {
    searchCharactersSchema,
} from "../validations/characterValidations";

const router: Router = express.Router();

// GET search results
router.get(
    "/search",
    validateRequest(searchCharactersSchema),
    characterController.searchCharacters
);

// GET a single character by ID
router.get("/:id", characterController.getCharacterById);

// GET all characters
router.get(
    "/",
    characterController.getAllCharacters
);

export default router;