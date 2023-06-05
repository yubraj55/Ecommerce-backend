const { default: mongoose} = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/f-c-Ecommerce')
  .then(() => console.log(' DB Connected!'));