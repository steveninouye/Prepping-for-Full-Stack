const express = require('express');
const bp = require('body-parser');
const path = require('path');
const routesRouter = require('./routes/index');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use('/api', routesRouter);

app.use(express.static(path.join(__dirname, '../client')));

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
