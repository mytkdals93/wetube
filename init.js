import app from "./app";
import "./db";
const PORT = process.env.PORT || 4000;
import "./models/Video";
app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
