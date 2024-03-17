const express = require('express');
const path = require('path');
const db = require('./db/connection');
const labTestsRouter = require('./routes/labTests');
const LabTest = require('./models/labTest');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MySQL database
db.authenticate()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Error connecting to the database:', err));

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory
app.use('/api/labTests', labTestsRouter);

// Insert sample data
db.sync({ force: true }) // Force sync to drop existing tables and recreate them
  .then(() => {
    LabTest.bulkCreate([
      { booking_id: 1, customer_name: 'John Doe', collection_date: '2024-03-15', booking_date: '2024-03-14' },
      { booking_id: 2, customer_name: 'Jane Smith', collection_date: '2024-03-16', booking_date: '2024-03-14' },
      // Add more sample data as needed
    ]);
  })
  .then(() => console.log('Sample data inserted successfully'))
  .catch(err => console.error('Error inserting sample data:', err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
