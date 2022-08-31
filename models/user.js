const { Schema, model } = require("mongoose");

//validates email address
const validateEmail = (email) => {
  let re = new RegExp("/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/");
  return re.test(email);
};

// Schema to create User model
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: "Email needed to move on",
    // validate: [validateEmail, "Please use a valid email address"],
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   "Please use a valid email address",
    // ],
  },
  interaction: [
    {
      type: Schema.Types.ObjectId,
      ref: "Interaction",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

// Create a virtual property that gets and sets the user's friend count
userSchema
  .virtual("friendCount")
  // Getter
  .get(function () {
    return `${this.friends.length}`;
  });

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;

