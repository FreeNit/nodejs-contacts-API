const mongoose = require('mongoose');

const app = require('./app');

const { DB_HOST } = require('./config');

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connected success');
    app.listen(3000, () => {
      console.log('Server running. Use our API on port: 3000');
      console.log(process.env);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
