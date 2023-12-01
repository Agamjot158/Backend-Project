const mongoose = require('mongoose');

// Assuming that the 'blog' model is defined in the 'models/blog' file
const Blog = require('./models/blog');

const mongoURI = 'mongodb+srv://AGAM:AGAM@blog.uznqm1i.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const blog = new Blog({
  title: 'The Goat',
  content: 'Lorem Ipsum dolor sit amet...',
});

blog.save()
  .then((savedBlog) => {
    console.log('Blog saved successfully:', savedBlog);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error saving blog:', error);
});
mongoose.connection.close();
