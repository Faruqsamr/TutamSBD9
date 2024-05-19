const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = 3001;
const app = express();

const bodyParser = require("body-parser");
const UserConnect = require('./repositories/connect.js');
const kostReview = require('./repositories/review.js');

app.use(bodyParser.json());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/login", UserConnect.login);
app.post("/signup", UserConnect.signup);
app.post("/getUserId", UserConnect.getUserId);
app.post("/makeReview", kostReview.createReview);
app.get("/getReview", kostReview.readReview);
app.put("/updateReview/:id", kostReview.updateReview);
app.delete("/deleteReview", kostReview.deleteReview);

app.listen(PORT, () => {
    console.info("Server is running on port", PORT);
});