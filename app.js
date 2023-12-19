const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

// Set up your database connection details
const pool = mysql.createPool({
    host: 'your-cloud-sql-instance-ip',
    user: 'your-username',
    database: 'your-database-name',
    password: 'your-password',
    waitForConnections: true,
});

// Handle registration form submission
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    
    // Add logic to hash password before storing it

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    pool.query(query, [username, email, password], (error, results) => {
        if (error) {
            // Handle error
            res.status(500).send('Error registering new user');
        } else {
            // Handle success
            res.status(200).send('User registered successfully');
        }
    });
});

// Handle login form submission
// ... similar to registration handler

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
