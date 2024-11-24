const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const db = require('./config/dbConnect');
const cors = require('cors');
app.use(cors());
app.use(express.json());
const session = require('express-session');
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized:true
}))

const contest = require('./routes/contest')
app.use('/contestant', contest)

const adminRouter = require('./routes/admin')
app.use('/admin', adminRouter);

const seat = require('./routes/seat');
app.use('/seater', seat);

const pendingData = require('./routes/pending');
app.use('/pending', pendingData);



app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});