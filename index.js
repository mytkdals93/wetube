import express from "express";
import morgan from "morgan"
import helmet from "helmet"
import bodyParser from "body-parser"
import cookeyParser from "cookie-parser"
const app = express();

const PORT = 4000;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookeyParser());
app.use(morgan("dev"));

app.use()
app.get("/",(req, res) => {
  res.send(`Hello World`);
});
app.get("/profile",(req,res)=>{
    res.send(`You are on my profile`)
})


app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});

//https://nomadcoders.co/wetube/lectures/15