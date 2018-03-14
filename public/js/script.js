// when you click on the button to search a city... (this should also be what happens when you click any of top5 or cardButtons)
function runSearch() {
    event.preventDefault();
    $("#test4").empty();
    $("#test5").empty();
    //grab the value from input field
    $("#test6").empty();
    var city = $("#searchCityInput").val().trim();
    var country = $("#searchCountryInput").val().trim();
    if (city || country != '') { // make sure input isn't empty

        // run an ajax call against our db to get any comments on that city
        $.ajax("/api/comments/" + city, {
            type: "GET",
        }).done(function(response) {
        
            console.log(response);
            var results = response;
            // if there are no results
             if (!results || !results.length) {
        displayCommentsEmpty(city);
      }
            // for each result do this...
            for (var i = 0; i < results.length; i++) {
                console.log(results.length);

                // Creating a div with the class "comment"
                var commentDiv = $("<div class='comment'>");

                //store the results here
                var person = results[i].person;
                var cityName = results[i].city;
                var countryName = results[i].country;
                var commentBody = results[i].body;
                var createdAt = results[i].createdAt;

                var formattedDate = createdAt
                formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
                var a = $("<div class='divider'>" + "</div>" +
                    "<div class='section'>" +
                    "<h3>" + person + "</h3>" +
                    "<h4>" + " Traveled to " + cityName + ", " + countryName + "</h4>" +
                    "<p>" + commentBody + "</p>" +
                    "<small>" + formattedDate + "</small>" +
                    "</div>"
                );


                // append the comment to the div
                commentDiv.append(a);
                // prepend the commentDiv to "#test4" div in the HTML
                $("#test4").prepend(commentDiv);

            }
        });
        $.get("/api/info/" + country, {
            type: "GET",
        }).done(function(response) {
            // if there are no results
             if (!response) {
        displayInfoEmpty(country);
      }
            // this is the info we get back
            var countryInfo = response;
            var name = countryInfo.list_geopoliticalarea;
            var transportation = countryInfo.list_travel_transportation;
            var health = countryInfo.list_health;
            var laws = countryInfo.list_local_laws_and_special_circumstances;
            var safety = countryInfo.list_safety_and_security;
            var entryReq = countryInfo.list_entry_exit_requirements;
            var description = countryInfo.list_destination_description;

            // create an area for this to go
            var infoDiv = $("<div class='info'>");
            // make it all look pretty 
            var d = $("<div class='divider'>" + "</div>" +
                "<div class='section'>" +
                "<h2>" + name + "</h2>" +
                "<h3>Transportation: </h3>" +
                "<p>" + transportation + "</p>" +
                "<h3> Health: </h3>" +
                "<p>" + health + "</p>" +
                "<h3>Local Laws: </h3>" +
                "<p>" + laws + "</p>" +
                "<h3>Safety: </h3>" +
                "<p>" + safety + "</p>" +
                "<h3>Entry Requirements: </h3>" +
                "<p>" + entryReq + "</p>" +
                "<h3>Destination Description: </h3>" +
                "<p>" + description + "</p>" +
                "</div>"
            );
            // append the info to the div
            infoDiv.append(d);
            // prepend the infoDiv to the "#test5" div
            $("#test5").prepend(infoDiv);

        })
        // get images for third field
        function getImages() {
            // change to lowercase for search
            var image = city.toLowerCase().trim();
            // query for bing
            var queryURL = "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=" + image + "&count=5";
            $.ajax({ // run the query
                    url: queryURL,
                    beforeSend: function(xhrObj) {
                        // Request headers
                        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "34424c6faeb84f0c812d8514cbba21b3"); //replace value with your own key
                    },
                    method: "GET"
                })

                .done(function(response) {
                    var results = response.value;// loop thru and append the images to the carousel
                    for (var i = 0; i < results.length; i++) {
                        var imageResultsDisplay = $('<img class="carousel-item" src="' + results[i].contentUrl + '"/>');
                        console.log("IMAGE " + results[i].thumbnailUrl);
                        $("#test6").append(imageResultsDisplay);
                    }
    
                    $("#test6").carousel({indicators:true});

                });
        }
        // call the function to get the images
        getImages();

        // Clear the textbox when done
        $("#searchCityInput").val("");
        $("#searchCountryInput").val("");


        // once we get all the stuff shoot us to bottom of the page
        $('html, body').animate({
            scrollTop: ($('.card-tabs').first().offset().top)
        }, 500);
    }


    else { // if empty input display message in input box 
        $("#searchCityName").html('<span style="color:red">"Please input a City to Search!"</span>'); //change color
        setTimeout(function() {
            $("#searchCityName").html("Search a City"); //return to normal
        }, 2500)
        $("#searchCountryName").html('<span style="color:red">"Please input a Country to Search!"</span>'); //change color
        setTimeout(function() {
            $("#searchCountryName").html("Search a Country"); //return to normal
        }, 2500)
    }
};

//Call the search if user hits return or clicks button
$("#searchCity").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#searchCity").click();
    }
});

// when you click on city search
$("#searchCity").on("click", function() {
    runSearch();
})


// when you click on all these damn buttons
function clickFunc(tagName) {
    console.log("inside cardHandler ");
    var myCityCountry = $(tagName).text().split(",");
    console.log("CityCountry=" + myCityCountry);
    var myCity = myCityCountry[0].trim();
    var myCountry = myCityCountry[1].trim();
    $("#searchCityInput").val(myCity);
    $("#searchCountryInput").val(myCountry);
    runSearch();

}

  // This function displays a messgae when there are no comments
  function displayCommentsEmpty(city) {
    var query = window.location.search;
    var partial = "";
    if (city) {
      partial = " for " + city;
    }
    $("#test4").empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No posts yet" + partial + ", click <a href='/form" + query +
    "'>here</a> to be the first!");
    $("#test4").append(messageh2);
  }

 // This function displays a messgae when there is no country data
  function displayInfoEmpty(country) {
    var query = window.location.search;
    var partial = "";
    if (country) {
      partial = " for " + country;
    }
    $("#test5").empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("Hmmm, there seems to be no information" + partial + ". We apologize for this inconvenience.");
    $("#test5").append(messageh2);
  }
