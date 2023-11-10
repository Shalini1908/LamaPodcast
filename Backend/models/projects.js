import mongoose from 'mongoose';

const projectsSchema = new mongoose.Schema({
  image: String,
  name: String,
  numberOfEpisodes : Number

});

const ProjectsModel = mongoose.model('project', projectsSchema);

export { ProjectsModel };
