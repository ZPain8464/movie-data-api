const app = require("./app");

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
