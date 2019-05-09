var API_KEY = 'AIzaSyBo4DcX855Nfv4PSiobEY_D4BnqDho6e14';
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




var EVENT_PARENT = document.querySelector('#event-parent');


var DATE_BOX_ALIGNMENT = "";


if (dateBoxAlignment == "top-left") {
    DATE_BOX_ALIGNMENT = "justify-content: flex-start !important; align-items: flex-start !important;"
} //top-left
else if (dateBoxAlignment == "top-center") {
    DATE_BOX_ALIGNMENT = "justify-content: center !important; align-items: flex-start !important;"
} //top-center
else if (dateBoxAlignment == "top-right") {
    DATE_BOX_ALIGNMENT = "justify-content: flex-end !important; align-items: flex-start !important;"
} //top-right
else if (dateBoxAlignment == "center-left") {
    DATE_BOX_ALIGNMENT = "justify-content: flex-start !important; align-items: center !important;"
} //center-left
else if (dateBoxAlignment == "center-center") {
    DATE_BOX_ALIGNMENT = "justify-content: center !important; align-items: center !important;"
} //center-center
else if (dateBoxAlignment == "center-right") {
    DATE_BOX_ALIGNMENT = "justify-content: flex-end !important; align-items: center !important;"
} //center-right
else if (dateBoxAlignment == "bottom-left") {
    DATE_BOX_ALIGNMENT = "justify-content: flex-start !important; align-items: flex-end !important;"
} //center-left
else if (dateBoxAlignment == "bottom-center") {
    DATE_BOX_ALIGNMENT = "justify-content: center !important; align-items: flex-end !important;"
} //center-center
else if (dateBoxAlignment == "bottom-right") {
    DATE_BOX_ALIGNMENT = "justify-content: flex-end !important; align-items: flex-end !important;"
} //center-right


var EVENT_ARROW_LEFT, EVENT_ARROW_RIGHT;
if (arrowType == 'double') {
    EVENT_ARROW_LEFT = "&#xf100";
    EVENT_ARROW_RIGHT = "&#xf101";
} else if (arrowType == 'single') {
    EVENT_ARROW_LEFT = "&#xf104";
    EVENT_ARROW_RIGHT = "&#xf105";
} else if (arrowType == 'solid') {
    EVENT_ARROW_LEFT = "&#xf0d9";
    EVENT_ARROW_RIGHT = "&#xf0da";
}


var DATA_DOT;

if (dotType == 'dot') {
    DATA_DOT = "&#xf111";
} else if (dotType == 'underline') {
    DATA_DOT = "&#xf068";
}


//fetch datas
$.ajax({
    url: 'https://sheets.googleapis.com/v4/spreadsheets/' + SHEET_ID + '/values/' + SHEET_NAME + '!' + START_RANGE + ':' + END_RANGE + '?key=' + API_KEY,
    dataType: 'jsonp',
    type: 'GET',
    success: function(result) {


        if (eventLayout == 'grid' || eventLayout == 'slider') {
            for (var i = 0; i <= result.values.length - 1; i++) {

                var eventCont = document.createElement('div');
                eventCont.setAttribute('class', 'event-cont');

                EVENT_PARENT.appendChild(eventCont);


                var imageCont = document.createElement('div');
                imageCont.setAttribute('class', 'image-cont');
                imageCont.setAttribute('style', DATE_BOX_ALIGNMENT + "background-image: url('" + result.values[i][2] + "')");
                eventCont.appendChild(imageCont);

                var eventDate = document.createElement('div');
                eventDate.setAttribute('class', 'event-date');
                imageCont.appendChild(eventDate);

                var eventDayName = document.createElement('div');
                eventDayName.setAttribute('class', 'event-dayname');
                // eventDayName.innerHTML = result.values[i][4].substr(0,3);
                eventDayName.innerHTML = moment(result.values[i][4]).format('ddd').substr(0, 3);
                eventDate.appendChild(eventDayName);

                var eventDay = document.createElement('div');
                eventDay.setAttribute('class', 'event-day');
                eventDay.innerHTML = moment(result.values[i][4]).format('D');
                eventDate.appendChild(eventDay);

                var eventMonth = document.createElement('div');
                eventMonth.setAttribute('class', 'event-month');
                eventMonth.innerHTML = moment(result.values[i][4]).format('MMM').substr(0, 3);
                eventDate.appendChild(eventMonth);



                var eventBody = document.createElement('div');
                eventBody.setAttribute('class', 'event-body');
                eventCont.appendChild(eventBody);


                var eventCategory = document.createElement('div');
                eventCategory.setAttribute('class', 'event-category');
                eventCategory.innerHTML = result.values[i][10];
                eventBody.appendChild(eventCategory);


                var eventTitle = document.createElement('div');
                eventTitle.setAttribute('class', 'event-title');
                eventTitle.innerHTML = result.values[i][1];
                eventBody.appendChild(eventTitle);


                var eventTime = document.createElement('div');
                eventTime.setAttribute('class', 'event-time');
                eventTime.innerHTML = "<i class='fa fa-clock-o'></i> " + result.values[i][5] + " - " + result.values[i][6];



                eventBody.appendChild(eventTime);




                var eventVenue = document.createElement('div');
                eventVenue.setAttribute('class', 'event-venue');
                eventVenue.innerHTML = "<i class='fa fa-map-marker'></i> " + result.values[i][8];




                eventBody.appendChild(eventVenue);




                var eventReadMore = document.createElement('div');
                eventReadMore.setAttribute('class', 'event-read-more');
                eventReadMore.innerHTML = "Read More";
                eventBody.appendChild(eventReadMore);
            } //for
        } //if(eventLayout != 'featured')
        else if (eventLayout == 'list') {


            for (var i = 0; i <= result.values.length - 1; i++) {

                var eventCont = document.createElement('div');
                eventCont.setAttribute('class', 'event-cont');
                EVENT_PARENT.appendChild(eventCont);

                var eventContChild = document.createElement('div');
                eventContChild.setAttribute('class', 'll-event-cont-child');
                eventCont.appendChild(eventContChild);


                var eventDate = document.createElement('div');
                eventDate.setAttribute('class', 'll-event-date');
                eventContChild.appendChild(eventDate);

                var eventDayName = document.createElement('div');
                eventDayName.setAttribute('class', 'll-event-dayname');
                // eventDayName.innerHTML = result.values[i][4].substr(0,3);
                eventDayName.innerHTML = moment(result.values[i][4]).format('ddd').substr(0, 3);
                eventDate.appendChild(eventDayName);

                var eventDay = document.createElement('div');
                eventDay.setAttribute('class', 'll-event-day');
                eventDay.innerHTML = moment(result.values[i][4]).format('D');
                eventDate.appendChild(eventDay);

                var eventMonth = document.createElement('div');
                eventMonth.setAttribute('class', 'll-event-month');
                eventMonth.innerHTML = moment(result.values[i][4]).format('MMM').substr(0, 3);
                eventDate.appendChild(eventMonth);



                var eventBody = document.createElement('div');
                eventBody.setAttribute('class', 'll-event-body');
                eventContChild.appendChild(eventBody);




                var eventCategory = document.createElement('div');
                eventCategory.setAttribute('class', 'll-event-category');
                eventCategory.innerHTML = result.values[i][10];
                eventBody.appendChild(eventCategory);


                var eventTitle = document.createElement('div');
                eventTitle.setAttribute('class', 'll-event-title');
                eventTitle.innerHTML = result.values[i][1];
                eventBody.appendChild(eventTitle);


                var eventInfo = document.createElement('div');
                eventInfo.setAttribute('class', 'll-event-info');
                eventBody.appendChild(eventInfo);




                var eventTime = document.createElement('div');
                eventTime.setAttribute('class', 'll-event-time');

                eventTime.innerHTML = "<i class='fa fa-clock-o'></i> " + result.values[i][5] + " - " + result.values[i][6];


                eventInfo.appendChild(eventTime);




                var eventReadMore = document.createElement('div');
                eventReadMore.setAttribute('class', 'll-event-read-more');
                eventReadMore.innerHTML = "Read More";
                eventInfo.appendChild(eventReadMore);
            } //for



        } //else of if(eventLayout == 'list')
        else if (eventLayout == 'featured') {


            for (var i = 0; i <= result.values.length - 1; i++) {


                if (result.values[i][0] == eventID) {

                    var eventCont = document.createElement('div');
                    eventCont.setAttribute('class', 'fl-event-cont');
                    EVENT_PARENT.appendChild(eventCont);


                    var imageCont = document.createElement('div');
                    imageCont.setAttribute('class', 'fl-image-cont');
                    imageCont.setAttribute('style', DATE_BOX_ALIGNMENT + "background-image: url('" + result.values[i][2] + "')");
                    eventCont.appendChild(imageCont);


                    var eventDateCont = document.createElement('div');
                    eventDateCont.setAttribute('class', 'fl-event-date-cont');
                    imageCont.appendChild(eventDateCont);


                    var eventDate = document.createElement('div');
                    eventDate.setAttribute('class', 'fl-event-date');
                    eventDateCont.appendChild(eventDate);

                    var eventDayName = document.createElement('div');
                    eventDayName.setAttribute('class', 'fl-event-dayname');
                    // eventDayName.innerHTML = result.values[i][4].substr(0,3);
                    eventDayName.innerHTML = moment(result.values[i][4]).format('ddd').substr(0, 3);
                    eventDate.appendChild(eventDayName);

                    var eventDay = document.createElement('div');
                    eventDay.setAttribute('class', 'fl-event-day');
                    eventDay.innerHTML = moment(result.values[i][4]).format('D');
                    eventDate.appendChild(eventDay);

                    var eventMonth = document.createElement('div');
                    eventMonth.setAttribute('class', 'fl-event-month');
                    eventMonth.innerHTML = moment(result.values[i][4]).format('MMM').substr(0, 3);
                    eventDate.appendChild(eventMonth);


                    var eventBody = document.createElement('div');
                    eventBody.setAttribute('class', 'fl-event-body');
                    imageCont.appendChild(eventBody);



                    var eventCategory = document.createElement('div');
                    eventCategory.setAttribute('class', 'fl-event-category');
                    eventCategory.innerHTML = result.values[i][10];
                    eventBody.appendChild(eventCategory);


                    var eventTitle = document.createElement('div');
                    eventTitle.setAttribute('class', 'fl-event-title');
                    eventTitle.innerHTML = result.values[i][1];
                    eventBody.appendChild(eventTitle);



                    var eventTime = document.createElement('div');
                    eventTime.setAttribute('class', 'fl-event-time');
                    eventTime.innerHTML = "<i class='fa fa-clock-o'></i> " + result.values[i][5] + " - " + result.values[i][6];


                    eventBody.appendChild(eventTime);



                    var eventInfo = document.createElement('div');
                    eventInfo.setAttribute('class', 'fl-event-info');
                    eventBody.appendChild(eventInfo);



                    var eventVenue = document.createElement('div');
                    eventVenue.setAttribute('class', 'fl-event-venue');


                    eventVenue.innerHTML = "<i class='fa fa-map-marker'></i> " + result.values[i][8];


                    eventInfo.appendChild(eventVenue);




                    var eventReadMore = document.createElement('div');
                    eventReadMore.setAttribute('class', 'fl-event-read-more');
                    eventReadMore.innerHTML = "Read More";
                    eventInfo.appendChild(eventReadMore);


                    break;

                } //if equals to event ID

            } //for

        } //else if featured



        if (eventLayout == "slider") {


            $('.carousel').slick({
                dots: sliderDots,
                slidesPerRow: sliderSlidesPerRow,
                rows: sliderRows,
                arrows: sliderArrows,
                autoplay: sliderAutoplay,
                autoplaySpeed: sliderAutoplaySpeed,
                customPaging: function(i) {
                    return DATA_DOT + ';';
                },
                prevArrow: "<button data-arrow-left='" + EVENT_ARROW_LEFT + "' data-arrow-right='" + EVENT_ARROW_RIGHT + "' type='button' class='slick-prev pull-left'></button>",
                nextArrow: "<button data-arrow-left='" + EVENT_ARROW_LEFT + "' data-arrow-right='" + EVENT_ARROW_RIGHT + "' type='button' class='slick-next pull-right'></button>"

            });


        } else if (eventLayout == "grid" || eventLayout == "default") {



            $('.carousel').slick({
                dots: false,
                rows: result.values.length, //row
                slidesPerRow: gridColumns, //column
                autoplay: false,
                autoplaySpeed: 500,
                draggable: false,
                swipe: false,
                swipeToSlide: false,
                touchMove: false,
                draggable: false,
                accessibility: false,
                arrows: false,
                prevArrow: "<button data-arrow-left='" + EVENT_ARROW_LEFT + "' data-arrow-right='" + EVENT_ARROW_RIGHT + "' type='button' class='slick-prev pull-left'></button>",
                nextArrow: "<button data-arrow-left='" + EVENT_ARROW_LEFT + "' data-arrow-right='" + EVENT_ARROW_RIGHT + "' type='button' class='slick-next pull-right'></button>"

            });



        } //else if
        else if (eventLayout == "list") {


            $('.carousel').slick({
                dots: false,
                rows: result.values.length, //row
                slidesPerRow: 1, //column
                autoplay: false,
                autoplaySpeed: 500,
                draggable: false,
                swipe: false,
                swipeToSlide: false,
                touchMove: false,
                draggable: false,
                accessibility: false,
                arrows: false,
                prevArrow: "<button data-arrow-left='" + EVENT_ARROW_LEFT + "' data-arrow-right='" + EVENT_ARROW_RIGHT + "' type='button' class='slick-prev pull-left'></button>",
                nextArrow: "<button data-arrow-left='" + EVENT_ARROW_LEFT + "' data-arrow-right='" + EVENT_ARROW_RIGHT + "' type='button' class='slick-next pull-right'></button>"

            });


        } //else if




    } //sucess
}); //ajax