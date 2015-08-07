var mongoose = require('mongoose');

var birdSchema = new mongoose.Schema({
  order: { type: String, lowercase: true, index: true, require: true },
  familyName: { type: String, lowercase: true, index: true, require: true },
  family: { type: String, lowercase: true, index: true},
  commonName: { type: String, lowercase: true, index: true, require: true },
  scientificName: { type: String, index: true, unique: true, require: true },
  authority: { type: String, lowercase: true},
  BirdLifeTaxonomicTreatment: { type: String, lowercase: true, enum: ['r', 'nr', 'ur']},
  IUCNRedListCategory2014: { type: String, lowercase: true, enum: ["lc", "nt", "vu", "en", "cr", "cr (pe)", "cr (pew)", "ew", "ex", "dd", "nr", "ur"] },
  synonyms: { type: String, lowercase: true},
  alternativeCommonNames: { type: String, lowercase: true, index: true},
  taxonomicNotes: { type: String, lowercase: true},
  taxonomicSources: { type: String, lowercase: true},
  SISRecID: { type: Number, index: true },
  SpcRecID: { type: Number, index: true }
});

module.exports = mongoose.model('Birds', birdSchema);
