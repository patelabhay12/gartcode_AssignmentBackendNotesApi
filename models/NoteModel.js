const mongoose = require("mongoose");


const NotesSchema = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: String, required: true },

}, {
    vesionKey: false
});


const NotesModel = mongoose.model("notes", NotesSchema);

module.exports = {
    NotesModel,
};