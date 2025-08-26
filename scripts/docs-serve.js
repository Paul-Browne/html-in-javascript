import express from 'express';

const app = express();

app.use("/", express.static("docs/", {
    maxAge: 0,
    extensions: ["html"],
    redirect: false
}));

app.listen(8090, () => console.log("http://localhost:8090"));