const mongoose = require("mongoose"); 

const schema = new mongoose.Schema({
    title: {type: String},
    value: {type: Number}
},{collection: "events"})

module.exports = mongoose.model("analyticsSnd", schema);