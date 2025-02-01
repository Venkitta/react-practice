const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Anas:Anas123@cluster0.loxm3.mongodb.net/");

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