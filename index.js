const express = require("express")
const app = express();
require("./config/database")
const users = require("./model/User")
app.use(express.json());


app.post("/api/signup", (req, res) => {
    console.log(req.body);
    let user=users.create(req.body);
    res.send(user);
})


app.listen(8000, () => {
    console.log("server started");

})