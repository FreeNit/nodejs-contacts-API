const mongoose = require('mongoose');

const app = require('./app');

const DB_HOST =
  'mongodb+srv://dmytrokovach333:jajtGw9A4ZCC2tBG@cluster0.91ksr0k.mongodb.net/db-contacts?retryWrites=true&w=majority';

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connected success');
    app.listen(3000, () => {
      console.log('Server running. Use our API on port: 3000');
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
