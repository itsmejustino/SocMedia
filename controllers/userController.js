const { Interaction, User } = require("../models");

module.exports = {
  //-----------------------User Controllers and Friends List------------------------
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getAUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "There is no user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  updateAUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "There is no user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  // adds a new friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } }
    )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.fineOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "There is no user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // delete friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }
    )
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  //-----------------------Interaction Controllers------------------------
  getUserInteraction(req, res) {
    Interaction.find()
      .then((interaction) => res.json(interaction))
      .catch((err) => res.status(500).json(err));
  },
  getOneUserInteraction(req, res) {
    Interaction.findOne({ _id: req.params.InteractionId })
      .then((interaction) =>
        !user
          ? res.status(404).json({
              message: "Couldn't find a user Interaction with that ID",
            })
          : res.json(interaction)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUserInteraction(req, res) {
    Interaction.create(req.body)
      .then((interaction) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: interaction._id } },
          { new: true }
      ).then((interaction) => res.json(interaction))
      }).catch((err) => res.status(500).json(err));
  }
  
  ,
  updateOneUserInteraction(req, res) {
    Interaction.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body }
    )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Couldn't find a user Interaction with that ID",
            })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  addReaction(req, res) {
    Interaction.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } }
    )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Couldn't find a user Interaction with that ID",
            })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // remove reaction from a thought
  removeReaction(req, res) {
    Interaction.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } }
    )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Couldn't find a user Interaction with that ID",
            })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteOneUserInteraction(req, res) {
    Interaction.deleteOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Couldn't find a user Interaction with that ID",
            })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
