import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config";

// Initializing packages
const app = express();

// Setting
app.set("port", process.env.PORT || 3000);
const PORT = app.get("port");

// Middleware
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// Routes
app.get("/hello", (req, res) => res.send("Hello"));

app.get("/api", (req, res) =>
  res.json({
    api: "Hello Json"
  })
);
// Start server
app.listen(PORT, () =>
  console.log(`Server runing on http://localhost:${PORT}`)
);
