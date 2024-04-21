import express from 'express';

const app = express();

app.use("/", express.static("public/", {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days for js
    extensions: ["html"]
}));

app.listen(8090, () => console.log("http://localhost:8090"));