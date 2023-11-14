import { ProjectFileModel } from "../models/projectFile.js";


//Get All Project Files
export const getAllProjectFiles = async (req, res) => {
  try {
    const projectFile = await ProjectFileModel.find({
        project_id: req.params.id,
      });
    console.log(projectFile);
    res.send({ data: projectFile });
  } catch (err) {
    console.log(err);
  }
};

// Adding ProjectFiles
export const createProjectFile = async (req, res) => {
  try {
    const projectFile = new ProjectFileModel(req.body);
    console.log(req.body); 
    await projectFile.save();

    res.status(200).send({ status: 200, msg: "ProjectFile has been added" });
  } catch (err) {
    res.send({ msg: "ProjectFile is not added" });
  }
};

// Get single ProjectFile
export const getProjectFileById = async (req, res) => {
  try {
    const projectFile = await ProjectFileModel.findById(req.params.id);

    if (projectFile) {
      res.send(projectFile);
    } else {
      res.send("ProjectFile not found");
    }
  } catch (error) {
    console.log(error);
  }
};

// Update ProjectFile
export const updateProjectFile = async (req, res) => {
  try {
    await ProjectFileModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("ProjectFile Updated Successfully");
  } catch (error) {
    console.log(error);
  }
};

// Delete ProjectFile
export const deleteProjectFile = async (req, res) => {
  try {
    await ProjectFileModel.findByIdAndDelete(req.params.id);
    res.send("ProjectFile Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
};
