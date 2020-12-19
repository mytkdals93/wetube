const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send(`Hello World`);
});
app.get("/profile",(req,res)=>{
    res.send(`You are on my profile`)
})

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
