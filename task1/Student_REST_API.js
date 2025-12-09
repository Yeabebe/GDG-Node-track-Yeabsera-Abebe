const http = require('http');

let students = [
  { id: 1, name: "Yeab" },
  { id: 2, name: "Sara" }
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // GET /students  (Return all)
  if (method === 'GET' && url === '/students') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(students));
  }

  // POST /students (Create student)
  if (method === 'POST' && url === '/students') {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);

        if (!data.name) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("Name is required");
        }

        const newStudent = {
          id: students.length + 1,
          name: data.name
        };

        students.push(newStudent);

        res.writeHead(201, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(newStudent));
      } catch (error) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Invalid JSON");
      }
    });

    return;
  }

  // PUT /students/:id (Update)
  if (method === 'PUT' && url.startsWith('/students/')) {
    const id = parseInt(url.split('/')[2]); // extract id

    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        const student = students.find(s => s.id === id);

        if (!student) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          return res.end("Student not found");
        }

        if (!data.name) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          return res.end("Name is required");
        }

        student.name = data.name; // update name

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(student));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Invalid JSON");
      }
    });

    return;
  }

  // DELETE /students/:id (Delete)
  if (method === 'DELETE' && url.startsWith('/students/')) {
    const id = parseInt(url.split('/')[2]);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Student not found");
    }

    students.splice(index, 1);

    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Student deleted successfully");
  }

  // Default: Route Not Found
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Route Not Found");
});

// Start server
server.listen(4000, () => {
  console.log("Student API server running on port 4000");
});
