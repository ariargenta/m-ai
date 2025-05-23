import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
import { Router } from "express";


const appRouter = Router();

appRouter.use( "/user", userRoutes ); // domain/api/v1/user
appRouter.use( "/chat", chatRoutes );    // domain/api/v1/chat

export default appRouter;