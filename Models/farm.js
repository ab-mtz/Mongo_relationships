const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', {})
mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', {
  useNewUrlParser: true, // Add this option to avoid deprecation warning
  useUnifiedTopology: true, // Add this option to avoid deprecation warning
})
.then(() => {
    console.log("Mongo conected")
})
.catch(err => {
    console.log("Mongo Connection error")
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String, 
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const Product = mongoose.model('Product', productSchema);

Product.insertMany([
    { name: 'Melon', price: 4.99, season 'Summer'},
    { name: 'Masdfasdf', price: 5.99, season 'Fall'},
    { name: 'Mdfgh', price: 3.99, season 'Summer'}
])
.then(() => {
    console.log("Data inserted successfully");
  })
  .catch(err => {
    console.error("Error inserting data:", err);
  });