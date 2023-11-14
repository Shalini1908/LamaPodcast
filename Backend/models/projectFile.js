import mongoose from "mongoose";

const projectFileSchema = new mongoose.Schema(
  {
    file_name: String,
    description: String,
    project_id:String
  },
  {
    timestamps: true,
  }
);

const ProjectFileModel = mongoose.model("projectfile", projectFileSchema);

export { ProjectFileModel };
