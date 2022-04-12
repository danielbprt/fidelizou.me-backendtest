const express = require('express');
const app = express();app.use(express.json());
const port = 1000;

const users = [];
const link = [(Math.random() + 1).toString(20).substring(7)];
app.get("", (req, res) =>
{
    res.send("ok");
})

app.get("/register", (req, res) =>
{
    res.send("ok");
})

app.post("/register", (req, res) =>
{

    const {name, email, phone} = req.body;
    const user = {name, email, phone, link}
    users.push(user);
    (async () =>{
        const db = require("./db");
        console.log("New Register")
        const result = await db.insertdatab({name: name, email: email, phone: phone, link: link});    
        })();
    res.redirect("/register/"+link+"");

})

app.get("/register/"+link+"", (req, res) =>
{
    res.send("Registered.\nYour sharelink: register/"+link+"");

})

app.listen(port, () =>
{
    console.log("Server on.");
})

