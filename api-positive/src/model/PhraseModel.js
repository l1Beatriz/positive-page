import mongoose from "mongoose";

const PhraseSchema = new mongoose.Schema ({
    _id: {type: String, require: false},
    phrase: {type: String, require: true}
}, {
    versionKey: false
})

const phrases = mongoose.model("phrases", PhraseSchema);

export default phrases; 