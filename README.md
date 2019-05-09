# Project Title
Event Calendar Widget

# Project Description

Simple js app that fetches data from a spreadsheet via spreadsheet api and load it into the app. You can specify different layout for the event calendar.

# Features

1. 4 Different Layout: slider, list, grid, featured
2. Responsive

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

# Prerequisites

Just include all necessary css and js files. Do not remove anything if you don't know what it does.

# Installing

1. Download the files

2. Edit this line in app.js

```
var API_KEY = '';
var SHEET_ID = '1fEgNggTT1KbOPm4CbakbihmAkTQ24ytEj0tOljNFvPM';
var SHEET_NAME = "Sheet1";
var START_RANGE = "A2";
var END_RANGE = "O1000";

var eventLayout = "slider"; //slider, list, featured, grid
var dateBoxAlignment = "top-left"; //top-center, top-right, center-center, center-right, center-left etc
var arrowType = "solid"; //double, single, solid
var dotType = "dot"; //dot, underline

//for featured event
var eventID = "1";


//for slider layout
var sliderAutoplaySpeed = "2000";
var sliderAutoplay = true;
var sliderArrows = true;
var sliderSlidesPerRow = "3";
var sliderRows = "1";
var sliderDots = true;
var sliderArrows = true;

//grid
var gridColumns = "3";
```

# Thanks to

* Slick
* Bulma
* Spreadsheet API
* MomentJS
* Fontawesome


