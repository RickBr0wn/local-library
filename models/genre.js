var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var genreSchema = new Schema(
  {
    name: { type: String, required = true, max: 100, min: 3 },
  }
);

// Virtual for bookinstance's URL
genreSchema
.virtual('url')
.get(function () {
  return '/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('genre', genreSchema);