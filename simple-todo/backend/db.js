const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://addyourlinkaddresshere.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}