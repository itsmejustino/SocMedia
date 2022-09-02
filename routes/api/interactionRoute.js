//connect router to express so app can use routes.
const router = require("express").Router();
//get all user methods from userController module.exports
const {
    getUserInteraction,
    getOneUserInteraction,
    createUserInteraction,
    updateOneUserInteraction,
    deleteOneUserInteraction,
    addReaction,
    removeReaction,
} = require("../../controllers/userController");

//get all interactions
router.route("/")
    .get(getUserInteraction)
    .post(createUserInteraction);
//get all interactions by id
router
    .route("/:interactionId")
    .get(getOneUserInteraction)
    .put(updateOneUserInteraction)
    .delete(deleteOneUserInteraction);

router.route("/:interactionId/reactions").post(addReaction);

router.route("/:interactionId/reactions/:reactionId").delete(removeReaction);

module.exports = router;