const router = require("express").Router();
const passport = require("passport");

// sign up & sign in page
router.get("/", (req, res) => {
    res.render("auth");
});

router.get("/google", passport.authenticate("google", {
  scope: ["profile"]
}) );

router.get("/google/callback", (req, res) => {
  res.send("test page");
});

module.exports = router;
