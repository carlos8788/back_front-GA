import { Router } from "express";
import { users } from "../controllers/users.controller.js";


const router = new Router()

router.get('/', users)

export default router