const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { connectToMongoDB } = require('./db'); // Import the connectToMongoDB function
const createUserRouter = require('./Routes/CreateUser');
const loginUserRouter = require('./Routes/loginUser');
const foodItemsRoute = require('./Routes/foodItems'); // Add this line for foodItemsRoute

app.use(express.json());

app.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
 res.setHeader(
  'Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept'
 );
 next();
});

// Call the connectToMongoDB function to establish a connection
connectToMongoDB(); // Connect to MongoDB after the server starts listening

app.get('/foodItems', (req, res) => {
 res.send('Hello World!');
});

app.use('/api', createUserRouter);
app.use('/api', loginUserRouter);
app.use('/api', foodItemsRoute); 

app.listen(port, () => {
 console.log(`App listening on port ${port}`);
});

