import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/work",(req,res) => {
    res.render("work.ejs");
});

app.get("/today",(req,res) =>
{
    res.render("index.ejs");
});



app.listen(port, () => {
    console.log("Listening on the port " + port);
});

