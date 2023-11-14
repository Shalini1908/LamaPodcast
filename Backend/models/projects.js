import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema(
  {
    project_title: String,
    user_email: String,
  },
  {
    timestamps: true,
  }
);

const ProjectsModel = mongoose.model("project", projectsSchema);

export { ProjectsModel };
