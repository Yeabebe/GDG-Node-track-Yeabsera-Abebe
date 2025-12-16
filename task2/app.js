import express from 'express';

const app = express();
const PORT = 3000;

/**
 * GET /home
 * Returns a welcome HTML message in green color
 */
app.get('/home', (req, res) => {
  res.send(`
    <html>
      <body>
        <h1 style="color: green;">Welcome to the Home Page</h1>
      </body>
    </html>
  `);
});

/**
 * GET /about
 * Returns plain text
 */
app.get('/about', (req, res) => {
  res.send('This page is about our Express application');
});

/**
 * GET /students/:studentId/?department=
 * Returns student details as JSON
 * Example:
 * /students/101?department=ComputerScience
 */
app.get('/students/:studentId', (req, res) => {
  const { studentId } = req.params;
  const { department } = req.query;

  res.json({
    id: studentId,
    department: department || 'Not provided',
    status: 'Student record found'
  });
});

/**
 * Start server
 */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
