import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/TODO', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log('Connected to the database!');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};

export default connectToDatabase;