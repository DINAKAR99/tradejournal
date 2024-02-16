import express from "express";

const app = express();
const port = 3000;

// Define a route
app.get("/jaguar", (req, res) => {
  const responseData = {
    message: "Hello, this is a custom message!",
    timestamp: new Date().toISOString(),
  };

  // Send the custom data as a JSON response
  res.json(responseData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
