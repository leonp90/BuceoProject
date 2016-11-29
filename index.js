const app = require('./server/app');
const db = require('./server/db');

const PORT = process.env.PORT || 3000;

const dbURI= 'mongodb://localhost/marenostrum'

db.open(dbURI);
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}...`));