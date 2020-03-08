const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const execisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database conection established successfully...');
});
//Router define
app.use('/exercises', execisesRouter);
app.use('/users', usersRouter);
app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
