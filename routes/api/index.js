const router = require("express").Router();
const eventRoutes = require("./events");
const userRoutes = require("./users");
const loginRoutes = require("./login");

router.use("/events", eventRoutes);
router.use("/users", userRoutes);
router.use("/login", loginRoutes);

module.exports = router;