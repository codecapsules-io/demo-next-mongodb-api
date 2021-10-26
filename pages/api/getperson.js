const db = require("../../app/models");
const Person = db.person;

export default handler;

function handler(req, res) {
    if (req.method === 'POST') {
        const id = req.body.id;
    
        Person.findById(id)
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
}