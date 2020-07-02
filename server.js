var express = require("express");
var app = express();

var PORT = process.env.PORT || 6060;


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log(" Server listening on: " + PORT);
});