const { Schema, model } = require("mongoose");
const reactionSchema = require('./Reaction');

// Schema to create User model
const interactionSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 180,
    minLength: [1, 'Type your thoughts...']
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
  reactions: [reactionSchema],
},
{
  toJSON: {
    getters: true
  },
});

// Create a virtual property `fullName` that gets and sets the user's full name
interactionSchema.virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

// Initialize our User model
const Interaction = model("Interaction", interactionSchema);

module.exports = Interaction;
