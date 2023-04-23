const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const getFBInfo = require("fb-downloader");
const { link } = require("fs");

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    return res.render("index");
});


app.get("/download", async function (req, res) {
    // let links = await igsaver(req.query.url);
    // let link = links.url_list;

 const info = await getFBInfo(req.query.url);

 const link = info.hd ;
    console.log(link);

    res.render("download", { url: link , video : req.query.url });
});



app.listen(port, function () {
    console.log("Server is running ");
});




