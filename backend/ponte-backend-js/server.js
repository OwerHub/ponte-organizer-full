const express = require("express")

const app = express();
const PORT = 8000;


app.use(express.json())
const cors = require("cors");

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

  credentials: true,
};

app.use(cors())


app.get("/ping", (req, res)=> {
  console.log("test is OK")
res.send("First is first")
})



const projectRoutes = require("./routes/projectsRoutes")
app.use("/projects", projectRoutes)
 

// LITSEN
app.listen(PORT, function () {
    console.log("Express server listening on port ", PORT); // eslint-disable-line
  });