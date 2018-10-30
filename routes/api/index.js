const router = require("express").Router();
const eventRoutes = require("./events");
const signInRoute = require("./signin");

router.use("/events", eventRoutes);
router.use("/signin", signInRoute);

module.exports = router;