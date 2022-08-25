const User = require('../models/User');

//async??

// const getUsers = async (req, res) => {
//   try{ 
//    const userData = await User.find();
//     userData => res.json(userData);
//   }
//   catch(err)
//   {
//     res.json(err)
//   }
    
// }

module.exports = {
  getUsers(req, res) {
    Interaction.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getAUser(req, res) {
    Interaction.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  getAUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  deleteUser(req, res) {
    User.deleteOne({ _id: req.params.userId })
    .select('-__v')
    .then((user) =>
      !user
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
},

};