const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RepoCollectionSchema = new Schema({
  repos: [{
    type: Schema.Types.ObjectId,
    ref: "RepoCatNode",
    required: true,
    default: []
  }]
});

const RepoCollection = mongoose.model("RepoCollection", RepoCollectionSchema);

module.exports = RepoCollection;
