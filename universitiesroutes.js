var express = require('express');
var router = express.Router();

var Universities=require("../db_modules/universities");

//api to save the shortlisted universities from the student

router.post("/SaveShortlisted",async function(req,res){
    var PostData=await Universities.saveUniversityDetails(req.body);

    res.json(PostData);

});

//api to get the shortlisted universities based on the StudentID

router.post("/GetShortlisted",async function(req,res){
    var GetData=await Universities.getShortlistUniversityDetails(req.body);

    res.json(GetData);

});

//api to get university Details based on the filters

router.post("/GetFiltered",async function(req,res){
    var GetData=await Universities.getUniversityDetails(req.body);

    res.json(GetData);

});

//api to compare Universities based on certain parameters

router.post("/GetCompared",async function(req,res){
    var GetData=await Universities.CompareUniversityDetails(req.body);

    res.json(GetData);

});

module.exports=router;