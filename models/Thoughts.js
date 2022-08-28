const { Schema, model } = require("mongoose");
const  reactionsSchema  = require("./Reaction");

// Schema to create User model
const thoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    max: 180,
    min: [1, 'Type your thoughts...']
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
  },
 username: { 
    type: String,
    Required: true,
},
  reactions: [reactionsSchema],
});

// Create a virtual property `fullName` that gets and sets the user's full name
thoughtsSchema.virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

// Initialize our User model
const Thoughts = model("thought", thoughtsSchema);

module.exports = Thoughts;
