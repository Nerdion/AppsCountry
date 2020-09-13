var express = require('express');
var api = express.Router();
var mongo = require('../models/model')
var playstore=require('../controllers/PlayStoreController')
var googlesearch = require('../controllers/GoogleSearchController')
var googleplayscrapper = require('../controllers/GooglePlayScrapperController')
var formdetails = require('../controllers/FormDetailsController')

//Play Store api's
 api.use('/api/getplaystoreinfo', playstore.getplaystoreinfo);//{"pkgName":"com.epicgames.fortnite"}

//Google Search api's
 api.use('/api/getsearchtermsresult', googlesearch.getSearchTermsResult);// not a api
 api.use('/api/getsearchdata', googlesearch.getSearchData); // 
 api.use('/api/getcountryname', googlesearch.getCountryName);

//Google Play Scrapper api's
 api.use('/api/appslistbydev', googleplayscrapper.appslistbydev);
 api.use('/api/appscategory', googleplayscrapper.appscategory);
 api.use('/api/appslistbycategory', googleplayscrapper.appslistbycategory);

 //Form Details api's
 api.use('/api/appsearchlist',formdetails.appsearch) //{searchText:" "}
 api.use('/api/getappdetails',formdetails.getappdetails) //{appId:""}
 api.use('/api/getd3data',formdetails.getd3data) //{appId:""}

module.exports = api ;
