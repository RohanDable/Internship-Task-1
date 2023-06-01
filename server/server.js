const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    users: [
      { Team: "🏏GT", Name: "David Miller", RunRate: "137.81" },
      {
        Team: "🏏GT",
        Name: "Hardik Pandya",
        RunRate: "140.33",
      },
      {
        Team: "🏏GT",
        Name: "Kasigo Rabada",
        RunRate: "111.45",
      },
      {
        Team: "🏏GT",
        Name: "Rishabh Pant",
        RunRate: "100.67",
      },
      {
        Team: "🏏GT",
        Name: "Venkatesh Iyer",
        RunRate: "99.89",
      },
    ],
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
