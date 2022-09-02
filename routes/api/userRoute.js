//connect router to express so app can use routes.
const router = require("express").Router();
//get all user methods from userController module.exports
const {
    getUsers,
    getAUser,
    createUser,
    updateAUser,
    deleteUser,
    addFriend,
    removeFriend
} = require("../../controllers/userController");

// Routes for User and Friend addition deletion methods.
//all user 
router.route("/")
    .get(getUsers)
    .post(createUser);

//get by user id
router.route("/:userId")
    .get(getAUser)
    .put(updateAUser)
    .delete(deleteUser);
//make a user post. use user id and friend id to retrieve
router.route("/:userId/friends/:friendId")
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;
