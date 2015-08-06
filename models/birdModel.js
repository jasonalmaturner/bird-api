var mongoose = require('mongoose');

var birdSchema = new mongoose.Schema({
  order: { type: String, lowercase: true, index: true},
  familyName: { type: String, lowercase: true, index: true},
  family: { type: String, lowercase: true, index: true},
  commonName: { type: String, lowercase: true, index: true},
  scientificName: { type: String, index: true, unique: true},
  authority: { type: String, lowercase: true},
  BirdLifeTaxonomicTreatment: { type: String, lowercase: true},
  IUCNRedListCategory2014: { type: String, lowercase: true},
  synonyms: { type: String, lowercase: true},
  alternativeCommonNames: { type: String, lowercase: true, index: true},
  taxonomicNotes: { type: String, lowercase: true},
  taxonomicSources: { type: String, lowercase: true},
  SISRecID: { type: Number, index: true, unique: true },
  SpcRecID: { type: Number, index: true, unique: true }
});

module.exports = mongoose.model('Birds', birdSchema);
