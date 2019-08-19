var express = require("express");
var router = express.Router();
var crypto = require("crypto");

/* GET users listing. */
router.post("/login", (req, res, next) => {
  console.log(req.body.hubMac);
  var token = crypto.randomBytes(48).toString("hex");
  console.log(`Token: ${token}`);
  res.send({
    retCode: 1000,
    retData: {
      token: token
    }
  });
});

router.post("/location", (req, res, next) => {
  const location = req.body.location;
  const tags = req.body.tags;
  const token = req.headers["authorization"];
  console.log(`Token: ${token}`);
  res.send({ retCode: 1000 });
});

module.exports = router;
