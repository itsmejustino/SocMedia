const { Schema, model } = require("mongoose");
const reactionSchema = require('./Reaction');


// Schema to create Interaction model
const interactionSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxLength: 180,
    minLength: [1, 'Type your thoughts...']
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: time => time.toUTCString() 
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
  id: false,
});


//virtual that tracks reaction count
interactionSchema.virtual('reactionCount')
//getter function to get the length of reaction array to get the reaction count
  .get(function () {
    return `${this.reactions.length}`;
  });


const Interaction = model("Interaction", interactionSchema);

module.exports = Interaction;
