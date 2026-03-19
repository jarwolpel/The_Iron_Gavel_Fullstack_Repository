import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import {
    getCredentialsByIdSchema,
    postCredentials,
    //deleteCredential
} from "../validations/credentialsValidations";
import * as credentialController from "../controllers/credentialController";


const router: Router = express.Router();

router.get(
    "/credential",
    //requireAuth(),
    credentialController.getAllCredentials
);

router.get(
    "/credential/:id",
    //requireAuth(),
    validateRequest(getCredentialsByIdSchema),
    credentialController.getCredentialById
);

router.post(
    "/credential",
    //requireAuth(),
    validateRequest(postCredentials),
    credentialController.createNewCredential
);

// router.put(
//     "/credential/:id",
//     requireAuth(),
//     validateRequest(postCredentials),
//     credentialController.updateCredentials
// );

// router.get(
//     "/credential/:id",
//     requireAuth(),
//     validateRequest(deleteCredential),
//     credentialController.deleteCredential
// );

export default router;