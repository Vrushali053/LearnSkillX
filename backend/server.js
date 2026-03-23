// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const db = require("./config/db");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("SkillOrbit Backend is Running Successfully!");
// });

// // GET all courses
// app.get("/api/courses", (req, res) => {
//   db.query("SELECT * FROM courses", (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Database error");
//     } else {
//       res.json(results);
//     }
//   });
// });

// // ADD new course
// app.post("/api/courses", (req, res) => {
//   const { name, duration, fee, description } = req.body;

//   const sql =
//     "INSERT INTO courses (name, duration, fee, description) VALUES (?, ?, ?, ?)";

//   db.query(sql, [name, duration, fee, description], (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Failed to add course");
//     } else {
//       res.send("Course added successfully");
//     }
//   });
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, function () {
//   console.log("Server running on port " + PORT);
// });


require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// ================= HOME ROUTE =================
app.get("/", (req, res) => {
  res.send("SkillOrbit Backend is Running Successfully!");
});


// ================= COURSES API =================

// GET all courses
app.get("/api/courses", async (req, res) => {
  try {
    const [results] = await db.execute("SELECT * FROM courses");
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

// ADD new course
app.post("/api/courses", async (req, res) => {
  const { name, duration, fee, description } = req.body;

  try {
    const sql =
      "INSERT INTO courses (name, duration, fee, description) VALUES (?, ?, ?, ?)";

    await db.execute(sql, [name, duration, fee, description]);

    res.send("Course added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to add course");
  }
});


// ================= CONTACT API =================

// POST Contact Form
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    const sql = `
      INSERT INTO contact_messages (name, email, phone, subject, message)
      VALUES (?, ?, ?, ?, ?)
    `;

    await db.execute(sql, [name, email, phone, subject, message]);

    res.json({ success: true, message: "Message saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Database error" });
  }
});

// GET all contact messages (Admin)
app.get("/api/contact", async (req, res) => {
  try {
    const [results] = await db.execute(
      "SELECT * FROM contact_messages ORDER BY id DESC"
    );
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching messages");
  }
});


// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("Server running on port " + PORT);
});