const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send([
    { id: 1, title: "First Post", content: "Lorem ipsum..." },
    { id: 2, title: "Second Post", content: "Dolor sit amet..." },
  ]);
});

module.exports = router;
