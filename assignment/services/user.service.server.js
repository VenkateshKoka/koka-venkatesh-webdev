
var app = require('../../express');

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];


app.get('/api/assignment/user', findAllUsers);
app.post('/api/assignment/user', createUser );
app.get('/api/assignment/user/:userId', findUserById);
app.put('/api/assignment/user/:userId', updateUser);
app.delete ('/api/assignment/user/:userId', deleteUser);
//app.get ("/api/assignment/user?username=:username&password=:password",findUserByCredentials);


// function findUserByCredentials(req,res) {
//     var username = req.params.userId;
//     var password = req.params.
// }
function deleteUser(req, res) {
    console.log("server delete user");
    var userId = req.params.userId;
    for(var u in users) {
        if(users[u]._id === userId) {
            users.splice(u, 1);
            res.sendStatus(200);

            return;
        }
    }
    res.json(null);
}

function updateUser(req,res) {
    var user = req.body;
    for(var u in users) {
        if(users[u]._id === req.params.userId){
            users[u] = user;

            res.sendStatus(200);
            return
        }

    }
    res.sendStatus(404);
}

function createUser(req,res) {
    var user = req.body;
    user._id = (new Date()).getTime() +"";
    users.push(user);
    res.json(user);
}


function findAllUsers (req,res) {
    var username = req.query['username'];
    var password = req.query.password;
    if (username && password){
        for(var u in users) {
            var user = users[u];
            if( user.username === username &&
                user.password === password) {
                res.json(user); // can use res.send(users) send is generic, json is used for only json objects
                return;
            }
        }
        res.json(null);
        //console.log("sending the response from server");
        return ;
    }
    else if(username) {
        for(var u in users) {
            var user = users[u];
            if( user.username === username) {
                res.json(user); // can use res.send(user) send is generic, json is used for only json objects
                return;
            }
        }
        res.sendStatus(404);
        return ;
    }
    else {
        res.send(users);
    }

};

function  findUserById(req, res) {
    var userId = req.params['userId'];
    for(var u in users) {
        if(users[u]._id === userId){
            res.send(users[u]);
            return
        }

    }
    res.json(null);
}
