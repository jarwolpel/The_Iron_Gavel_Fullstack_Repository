// import dotenv from "dotenv";
// dotenv.config();

import express, {Express} from "express";
import morgan from "morgan";
import cors from "cors";
import { clerkMiddleware, getAuth } from "@clerk/express";
import corsOptions from "../config/cors";
import setupSwagger from "../config/swagger";

import battleRoutes from "./api/v1/routes/battleRoutes";
import userBattleRoutes from "./api/v1/routes/userBattleRoutes";
import credentialRoutes from "./api/v1/routes/credentialRoutes"
import characterRoutes from "./api/v1/routes/characterRoutes"
import errorHandler from "./api/v1/middleware/errorHandler";

const app: Express = express();

// add morgan middleware, combined format logs info about each HTTP request
app.use(morgan("combined"));

// add Cross-Origin Resource Sharing middleware
app.use(cors(corsOptions));

// add clerk middleware
app.use(clerkMiddleware());

// allow express to parse json
app.use(express.json());

// invoke swagger middleware for serving docs in /api-docs
setupSwagger(app);


// listen for requests on root and send simple text response
app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});

// debugging auth, I'm going bananas!
app.use("/api/v1/battles", (req, _res, next) => {
    console.log("Auth header:", req.headers.authorization?.substring(0, 50));
    console.log("CLERK_SECRET_KEY set:", !!process.env.CLERK_SECRET_KEY);
    next();
});

app.use((req, _res, next) => {
    const { userId, sessionId } = getAuth(req);
    console.log("Clerk auth state:", { userId, sessionId, 
        hasAuthHeader: !!req.headers.authorization });
    next();
});

app.use("/api/v1", battleRoutes);
app.use("/api/v1", userBattleRoutes)

app.use("/api/v1", credentialRoutes);

app.use("/api/v1/characters", characterRoutes);

app.use(errorHandler); //errorhandler catches errors as last element in middleware chain
// occurs when "next" is invoked

export default app;