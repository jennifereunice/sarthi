import express from "express";
import {
  changePassword,
  expertDetails,
  getAllExperts,
  login,
  register,
} from "../controllers/expert-controller.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();
router.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  register
);
router.post("/login", login);
router.post("/resetpassword", changePassword);
router.get("/:id", expertDetails);
router.get("/", getAllExperts);

export default router;
