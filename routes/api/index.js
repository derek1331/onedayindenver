const router = require("express").Router();
const eventRoutes = require("./events");
<<<<<<< HEAD
const signInRoute = require("./signin");

router.use("/events", eventRoutes);
router.use("/signin", signInRoute);
=======
const userRoutes = require("./users");
const loginRoutes = require("./login");

router.use("/events", eventRoutes);
router.use("/users", userRoutes);
router.use("/login", loginRoutes);
>>>>>>> 9255454cfc3d60643ec2539e959559d3359cbb36

module.exports = router;