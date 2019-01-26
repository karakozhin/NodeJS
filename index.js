const express = require("express");

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/", function(request, response){
    response.sendFile(__dirname + "/register.html");
});

app.post("/", urlencodedParser, function(request, response){
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function (request, rsponse) {
    response.send("Главная страница");
});

app.listen(3000);

