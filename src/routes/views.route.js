import { Router } from "express";
import { about, home, users } from "../controllers/views.controller.js";


const router = new Router()

router.get('/', home)
router.get('/about', about)
router.get('/users', users)

export default router