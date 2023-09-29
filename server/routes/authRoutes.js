const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
  failLogin,
  logout,
} = require("../controllers/authControllers");
const jwt = require("jsonwebtoken");

const clientUrl = "http://localhost:5173";

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: clientUrl,
    failureRedirect: "/login/failed",
  })
);

router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["profile", "user:email"],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: clientUrl,
    failureRedirect: "/login/failed",
  })
);

router.get("/logout", logout);

router.get("/login/failed", failLogin);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
