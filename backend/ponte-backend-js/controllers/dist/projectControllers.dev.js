"use strict";

fs = require("fs");

var _require = require("fs"),
    writeFile = _require.writeFile;

var _require2 = require("express"),
    response = _require2.response;

exports.testFunct = function (req, res) {
  res.send("im a testfunction in typeController");
}; // get projects


exports.getProjects = function (req, res) {
  var getprojectList = require("../data/projectlist.json");

  res.json(getprojectList);
}; // add new Project


exports.postProject = function (req, res) {
  var pushprojectList = require("../data/projectlist.json");

  pushprojectList.push(req.body);
  var dataString = JSON.stringify(pushprojectList, null, 2);
  fs.writeFile("./data/projectlist.json", dataString, function (err) {
    if (err) return console.log(err);
  });
  res.json(pushprojectList);
}; // delete project


exports.deleteProject = function (req, res) {
  var importProjectList = require("../data/projectlist.json");

  var deltedProjectList = importProjectList.filter(function (project) {
    return project.id !== req.body.id;
  });
  var dataString = JSON.stringify(deltedProjectList, null, 2);
  fs.writeFile("./data/projectlist.json", dataString, function (err) {
    if (err) return console.log(err);
  });
  res.json(deltedProjectList);
}; // results


exports.resultProjectDatas = function (req, res) {
  var importProjectListForResult = require("../data/projectlist.json");

  var response = importProjectListForResult.find(function (project) {
    return project.id === req.body.id;
  });
  res.json(response);
};