import express, { Router } from "express";
import { validateRequest } from "../middleware/validate";
import * as characterController from "../controllers/characterController";
import {
    searchCharactersSchema,
} from "../validations/characterValidations";

console.log("CHARACTER ROUTES LOADED");

const router: Router = express.Router();
console.log("characterRoutes mounted");

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

// PATCH route to toggle the favorite status of a character
router.patch("/:id/favourite", characterController.toggleFavorite);

export default router;