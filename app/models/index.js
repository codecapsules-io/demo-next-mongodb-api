const dbConfig = require("../db-config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(x => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`,
        );
    })
    .catch(err => {
        console.error('Error connecting to mongo', err);
    });

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.person = require("./person.model.js")(mongoose);

module.exports = db;