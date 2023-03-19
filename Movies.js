var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.connect(process.env.DB);

// Movie schema
var MovieSchema = new Schema({
    Title: {type: String, required: true},
    YearReleased: {type: String, required: true},
    genre: {
        type: String,
        enum: ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller'],
    },
    //add validation to pass at least three actors
    Actors: [
        {ActorName: {type: String, required: true}, CharacterName: {type: String, required: true}},
        {ActorName: {type: String, required: true}, CharacterName: {type: String, required: true}},
        {ActorName: {type: String, required: true}, CharacterName: {type: String, required: true}}
    ]
    /*
    Movie.findOneAndUpdate(req.body.find_Title, req.body.update_Title, function(err, movie)
    */
});

MovieSchema.pre('save', function(next) {
    next();
});

// return the model
module.exports = mongoose.model('Movie', MovieSchema);