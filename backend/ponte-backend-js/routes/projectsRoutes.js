const express = require("express");
const router = express.Router();
const app = express(); 
app.use(express.json())

const projectsControllers = require("../controllers/projectControllers")

router.get("/ping", projectsControllers.testFunct);

router.get("/projects", projectsControllers.getProjects)

router.post("/projects", projectsControllers.postProject)

router.delete("/projects", projectsControllers.deleteProject)

router.put("/projectResult", projectsControllers.resultProjectDatas)

module.exports = router;