import express from "express";
import {
  createUsers,
  getUser,
  getUsers,
  removeUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

let users = [];

router.get("/", getUsers);

router.post("/", createUsers);

router.get("/:id", getUser);

router.delete("/:id", removeUser);

router.patch("/:id", updateUser);

export default router;
