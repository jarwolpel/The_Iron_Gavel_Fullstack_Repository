import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import * as characterController from "../controllers/characterController";
import {
    getCharacterByIdSchema,
    searchCharactersSchema,
} from "../validations/characterValidations";

const router: Router = express.Router();

// GET all characters
router.get(
    "/",
    characterController.getAllCharacters
);

// GET a single character by ID
router.get(
    "/:id",
    validateRequest(getCharacterByIdSchema),
    characterController.getCharacterById
);

// GET search results
router.get(
    "/search",
    validateRequest(searchCharactersSchema),
    characterController.searchCharacters
);

export default router;