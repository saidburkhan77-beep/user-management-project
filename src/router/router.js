import { createUser, findAll, findById, remove, update } from "../controller/user.controller.js";
import { Router } from "express";

const router =Router()
router.get ('/', findAll)
router.get('/:id',findById)
router.post ('/',createUser)
router.patch('/:id',update)
router.delete('/:id',remove)
export default router;