const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.get("/data", (req, res) => {
    const results = [];

    fs.createReadStream(path.join(__dirname, "public", "data.csv"))
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => res.json(results));
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
