const express = require("express");
const rutajuegos = require("./routes/rutas");
const path = require('path');
const app = express();

app.set("view engine", 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/styles", express.static(path.join(__dirname, "views", "Styles")));

app.use("/", rutajuegos);

const port = process.env.PORT || 3500;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})