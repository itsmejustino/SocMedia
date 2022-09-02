//connect router to express so app can use routes.
const router = require("express").Router();
//get all methods from userController module.exports
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
//all interactions by id
router
    .route("/:interactionId")
    .get(getOneUserInteraction)
    .put(updateOneUserInteraction)
    .delete(deleteOneUserInteraction);
//reactions by the interaction id
router.route("/:interactionId/reactions").post(addReaction);
//interaction id and reaction id to delete interaction
router.route("/:interactionId/reactions/:reactionId").delete(removeReaction);

module.exports = router;