const database = require("./database");

const getUsers = (req, res) => {
    database.query("SELECT * FROM users").then(([users]) => {
        res.json(users);
        res.status(200).send("List of users");
    }).catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from database");
    });
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    database.query("SELECT * FROM users WHERE id = ?", [id]).then(([users]) => {
        if (users[0] != null) {
            res.json(users[0]);
            res.status(200).send("User selected");
        } else { res.status(404).send("Not Found"); }
    }).catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from database");
    });
};


module.exports = {
    getUsers,
    getUsersById,
};
