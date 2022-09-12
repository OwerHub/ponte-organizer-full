fs = require("fs");
const { writeFile } = require("fs");

const { response } = require("express");

exports.testFunct = (req, res) => {
    res.send("im a testfunction in typeController");
};


// get projects
exports.getProjects = (req, res) => {
    console.log("get")
    let getprojectList = require("../data/projectlist.json");
    res.json(getprojectList);
};


// add new Project
exports.postProject = (req, res) => {
    console.log("post")
    let pushprojectList = require("../data/projectlist.json");
    pushprojectList.push(req.body);
    
    let dataString = JSON.stringify(pushprojectList, null, 2);
    fs.writeFile("./data/projectlist.json", dataString, function (err) {
        if (err) return console.log(err);
    });
    
    res.json(pushprojectList);
};


// delete project
exports.deleteProject = (req, res) => {
const importProjectList = require("../data/projectlist.json");

 let deltedProjectList = importProjectList.filter(
    (project) => project.id !== req.body.id
  );

  const dataString = JSON.stringify(deltedProjectList, null, 2);


  fs.writeFile("./data/projectlist.json", dataString, function (err) {
    if (err) return console.log(err);
  });

  res.json(deltedProjectList);
};


// results
exports.resultProjectDatas = (req, res) => {
    console.log("resilt")
    console.log(req.body)
    const importProjectListForResult = require("../data/projectlist.json")

    const response = importProjectListForResult.find(project => project.id === req.body.id)

    res.json(response)
}