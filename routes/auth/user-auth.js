const router = require("express").Router();

const signUp = (req, res) => {
  return res.status(200).send("sign-up");
};

router.route("/sign-up").post(signUp);

module.exports = router;
