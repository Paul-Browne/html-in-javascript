import express from 'express';

const app = express();

app.use("/", express.static("ssg/", {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days for js
    extensions: ["html"],
    redirect: false
}));

app.listen(8090, () => console.log("http://localhost:8090"));