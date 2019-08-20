var express = require("express");
var router = express.Router();
var crypto = require("crypto");
var jwt = require("jsonwebtoken");
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";

/* GET users listing. */
router.post("/login", (req, res, next) => {
  try {
    console.log(req.body.hubMac);
    const { hubMac } = req.body;
    var payload = { id: hubMac };
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    console.log(`Token: ${token}`);
    res.json({
      retCode: 1000,
      retData: {
        token: token
      }
    });
  } catch {
    res.json({ retCode: 1002 });
  }
});

router.post("/location", (req, res, next) => {
  const location = req.body.location;
  const tags = req.body.tags;
  const token = req.headers["authorization"];
  console.log(`Token: ${token}`);
  res.json({ retCode: 1000 });
});

module.exports = router;
