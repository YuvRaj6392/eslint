import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Hi there",
  });
});

function withSpace (x: number) {
  console.log(x);
}

withSpace(1);

//npm init @eslint/config@latest
//npx eslint . --fix
//yarn add --dev --exact prettier
//npx prettier . --write
