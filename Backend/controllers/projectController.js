import { ProjectsModel } from "../models/projects.js";

// Get all Projects
export const getAllProjects = async (req, res) => {
  try {
    const project = await ProjectsModel.find({
      user_email: req.query.userEmail,
    });
    res.send({ data: project });
  } catch (err) {
    console.log(err);
  }
};

// Adding Projects
export const createProject = async (req, res) => {
  try {
    const project = new ProjectsModel(req.body);
    await project.save();

    res.status(200).send({ status: 200, msg: "Project has been added" });
  } catch (err) {
    res.send({ msg: "Project is not added" });
  }
};

// Get single Project
export const getProjectById = async (req, res) => {
  try {
    const project = await ProjectsModel.findById(req.params.id);

    if (project) {
      res.send(project);
    } else {
      res.send("Project not found");
    }
  } catch (error) {
    console.log(error);
  }
};

// Update Projects
export const updateProject = async (req, res) => {
  try {
    await ProjectsModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("Project Updated Successfully");
  } catch (error) {
    console.log(error);
  }
};

// Delete Projects
export const deleteProject = async (req, res) => {
  try {
    await ProjectsModel.findByIdAndDelete(req.params.id);
    res.send("Project Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};
