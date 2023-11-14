import express from "express";
import { connection } from "./config/db.js";
import { projectRoutes } from "./routes/projects.js";
import cors from "cors";
import { projectFileRoutes } from "./routes/projectFile.js";

const app = express();

// Enabling Cross-Origin Resource Sharing (CORS)
app.use(
  cors({
    origin: "https://lamaproject.vercel.app",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Welcome");
});

// Project routes
app.use("/project", projectRoutes);
app.use("/projectfile", projectFileRoutes);

// Handling OPTIONS requests for CORS preflight
app.options('*', cors());

// Starting Server
app.listen(process.env.PORT || 3000, async () => {
  try {
    await connection;
    console.log("Connected to the database");
  } catch (error) {
    console.log({
      msg: "Error connecting to the database:",
      error: error.message,
    });
    console.log("Can't connect to the database");
  }
});
