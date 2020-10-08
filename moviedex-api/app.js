const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const moviesData = require("./movies-data-small.json");

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(validateBearerToken);

function validateBearerToken(req, res, next) {
  const authToken = req.get("Authorization");
  const apiToken = process.env.API_TOKEN;

  if (
    !authToken ||
    !authToken.includes("Bearer") ||
    authToken.split(" ")[1] !== apiToken
  ) {
    return res.status(401).json({ error: "Unauthorized Request" });
  }

  next();
}

app.get("/movie", handleGetMovies);

function handleGetMovies(req, res) {
  let response = moviesData;

  if (req.query.genre) {
    response = response.filter((movies) => {
      return movies.genre.toLowerCase().includes(req.query.genre.toLowerCase());
    });
  }

  if (req.query.country) {
    response = response.filter((movies) => {
      return movies.country
        .toLowerCase()
        .includes(req.query.country.toLowerCase());
    });
  }

  const avgVote = parseFloat(req.query.avg_vote);

  // if (Number.isNaN(avgVote)) {
  //   return res.send("Average vote must be a number");
  // }

  if (req.query.avg_vote) {
    response = response.filter((movies) => {
      return Number(movies.avg_vote) >= Number(req.query.avg_vote);
    });
  }

  res.json(response);
}

module.exports = app;
