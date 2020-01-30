require("dotenv").config();

const server = require("./server");

const PORT = process.env.PORT || 7000;

if (!module.parent) {
server.listen(PORT, () => {
  console.log(`\n=== Server is running on port ${PORT} ===\n`);
})
}