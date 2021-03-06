import { Router } from "express"
import { ensureAuthenticated } from "../prisma/middleware/ensureAuthenticated"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateMessageController } from "./controllers/CreateMessageController"
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController"
import { UserProfileController } from "./controllers/UserProfileController"

export const router = Router()

router.post("/authenticate", new AuthenticateUserController().handle)

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)
router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get("/profile", ensureAuthenticated, new UserProfileController().handle)
