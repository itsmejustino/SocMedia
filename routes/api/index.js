const router = require("express").Router();
const userRoute = require("./userRoute");
const interactionRoutes = require("./interactionRoute")

router.use("/users", userRoute);
router.use("/interactions", interactionRoutes);

module.exports = router;
