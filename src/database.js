const mongoose = require('mongoose');

const { SW_APP_MONGODB_HOST, SW_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${SW_APP_MONGODB_HOST}/${SW_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true 
}).then(db => console.log('Conectado a la base de datos')).catch(err => console.log(err));