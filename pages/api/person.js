const db = require("../../app/models");
const Person = db.person;

export default handler;

function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body)
        // Validate request
        if (!req.body.name) {
            res.status(400).send({ message: "Content can not be empty!" });
            return;
        }

        // Create a Person
        const person = new Person({
            name: req.body.name,
        });

        // Save Person in the database
        person
            .save(person)
            .then(data => {
            res.send(data);
            })
            .catch(err => {
                console.log(err)
            // res.status(500).send({
            //     message:
            //     err.message || "Some error occurred while creating the Person."
            //});
            });
            //return getUsers();
        //default:
           // return res.status(405).end(`Method ${req.method} Not Allowed`)
    }  
}