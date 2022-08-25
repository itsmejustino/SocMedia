const router = require('express').Router();
//get user, user by id, get thoughts, 

const { getUsers, getAUser, createUser } = require('../../controllers/userController');

// /api/users


router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getAUser);

//TODO: delete users, put users, post users all by id
router.route('/:userId').get(getAUser);


module.exports = router;