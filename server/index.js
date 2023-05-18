const express = require('express');
const apiRouter = require('./routes/api');
const cors = require('cors');

const app = express();
const PORT = 5050;

app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});
