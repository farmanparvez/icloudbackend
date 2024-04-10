const express = require("express");
const authController = require("../controller/authController");

const router = express.Router();

router.post("/login", authController.signUp);

router.post("/details", authController.details);

router.post("/status", authController.status);

router.get("/status", authController.status);

module.exports = router;
