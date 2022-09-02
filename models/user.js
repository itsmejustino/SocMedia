const { Schema, model } = require("mongoose");

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
    lowercase: true,
    required: 'Email address is required',
    //regex expression that validates an email address was
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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
userSchema.virtual("friendCount")
  .get(function () {
    return `${this.friends.length}`;
  });

// Initialize our User model
const User = model("User", userSchema);

module.exports = User;

