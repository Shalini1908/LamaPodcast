import express from "express";
import * as projectController from "../controllers/projectController.js";

const projectRoutes = express.Router();

// Get all Projects
projectRoutes.get("/all", projectController.getAllProjects);

// Creating Projects
projectRoutes.post("/create", projectController.createProject);

// Get single Project
projectRoutes.get("/:id", projectController.getProjectById);

// Update Projects
projectRoutes.patch("/:id", projectController.updateProject);

// Delete Projects
projectRoutes.delete("/:id", projectController.deleteProject);

export { projectRoutes };
