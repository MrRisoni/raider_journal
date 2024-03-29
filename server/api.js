const port = process.env.PORT || 3500;
const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');

const toonRoutes = require("./routes/toon_routes");
const raidRoutes = require("./routes/raid_routes");

app.use("/", toonRoutes);
app.use("/", raidRoutes);


http.listen(port, (req, res) => {
    console.log('Server listening on port number', port);
});

module.exports = {
    serverApp: app
};


