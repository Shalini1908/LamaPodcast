import express from "express";
import * as projectFilesController from "../controllers/projectFilesController.js";

const projectFileRoutes = express.Router();

// Get all ProjectFiles
projectFileRoutes.get("/all/:id", projectFilesController.getAllProjectFiles);

// Creating ProjectFiles
projectFileRoutes.post("/create", projectFilesController.createProjectFile);

// Get single ProjectFile
projectFileRoutes.get("/:id", projectFilesController.getProjectFileById);

// Update ProjectFile
projectFileRoutes.patch("/:id", projectFilesController.updateProjectFile);

// Delete ProjectFile
projectFileRoutes.delete("/:id", projectFilesController.deleteProjectFile);

export { projectFileRoutes };
