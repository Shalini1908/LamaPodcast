import express from 'express';
import { connection } from './config/db.js';
import { userRoutes } from './routes/user.js';
import { projectRoutes } from './routes/projects.js';
import { auth } from "./middleware/auth.js"
import cors from 'cors';

const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Default route
app.get('/', (req, res) => {
  res.send('Welcome');
});

// User routes
app.use('/user', userRoutes);

// Middleware for authentication
app.use(auth);

// Project routes 
app.use('/project', projectRoutes);

// Starting Server
app.listen(process.env.PORT, async () => {
  try {
    //Establish connection to the database
    await connection;
    console.log('Connected to the database');
  } catch (error) {
    console.log({ msg: 'Error connecting to the database:', error: error.message });
    console.log("Can't connect to the database");
  }
});
