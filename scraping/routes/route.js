var express = require('express');
var api = express.Router();
var mongo = require('../models/model')
var playstore=require('../controllers/PlayStoreController')
var googlesearch = require('../controllers/GoogleSearchController')
var googleplayscrapper = require('../controllers/GooglePlayScrapperController')

//Play Store api's
 api.use('/api/getplaystoreinfo', playstore.getplaystoreinfo);

//Google Search api's
 api.use('/api/getsearchtermsresult', googlesearch.getSearchTermsResult);
 api.use('/api/getsearchdata', googlesearch.getSearchData);
 api.use('/api/getcountryname', googlesearch.getCountryName);

//Google Play Scrapper api's
 api.use('/api/appslistbydev', googleplayscrapper.appslistbydev);
 api.use('/api/appscategory', googleplayscrapper.appscategory);
 api.use('/api/appslistbycategory', googleplayscrapper.appslistbycategory);

module.exports = api ;
