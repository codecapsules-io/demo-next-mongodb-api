const db = require("../../../app/models");
const Person = db.person;

export default function handler(req, res) {
    const { pid } = req.query
    //res.end(`Post: ${pid}`)

    Person.findById(pid)
            .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Person with id " + id });
            else res.send(data);
            })
            .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Person with id=" + id });
            });
}