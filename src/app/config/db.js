import mongoose from 'mongoose';
import dotenv from 'dotenv';

// dotenv.config({ path: "/Users/trip/git/blogMemeScripts/.env" });
dotenv.config();

// Use environment variables for credentials
const getMongoURI = () => {
 const dbURL = process.env.DATABASE_URL;
 if (!dbURL) {
  throw new Error('DATABASE_URL is not set');
 }
 return dbURL;
};
// const uri = "mongodb+srv://trip:ooKoVQhrUlYfmyg9@cluster0.qowhuke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true }, connectTimeoutMS: 5000,
};

async function connectDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    const uri=getMongoURI();
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return mongoose.connection.db;
  } catch (err) {
    // Ensures that the client will close when you finish/error
    console.dir(err);
  }
}

export default connectDB;
