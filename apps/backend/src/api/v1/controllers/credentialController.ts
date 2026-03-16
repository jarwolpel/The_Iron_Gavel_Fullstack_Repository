import { Request, Response, NextFunction } from "express";
import * as credentialService from "../services/credentialService";
import { successResponse } from "../models/responseModel";
// import { Credential } from "../../../../types/userCredentials";
import { FrontEndCredential } from "@shared/types/userCredentials";