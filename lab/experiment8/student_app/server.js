const express = require("express");
const path = require("path");

const app = express();
const port = 4000;

// Serve all static files (HTML, JS, CSS)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log(`Student app running at http://localhost:${port}`);
});

