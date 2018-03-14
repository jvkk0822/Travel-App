var cityNames = [];
var countryNames = [];

var indexToIdMap = {
    0: "#cityOne",
    1: "#cityTwo",
    2: "#cityThree",
    3: "#cityFour",
    4: "#cityFive"
}

var indexToIdMapImage = {
    0: '#imgOne',
    1: '#imgTwo',
    2: '#imgThree',
    3: '#imgFour',
    4: '#imgFive'
}

function allCities() {

    cityNames.forEach(function(cityName, i) {
        $(indexToIdMap[i]).append(cityName + ", <br>" + countryNames[i]);

        var image = cityName.toLowerCase().trim();

        var queryURL = "https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=" + image + "&count=1";

        setTimeout(function() {
            $.ajax({
                    url: queryURL,
                    beforeSend: function(xhrObj) {
                        // Request headers
                        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "34424c6faeb84f0c812d8514cbba21b3"); //replace value with your own key
                    },
                    method: "GET"
                })

                .done(function(response) {
                    console.log(response);

                    var results = response.value;
                    console.log(results);
                    console.log("image:::::::::::::: " + results[0].thumbnailUrl);

                    var imageResultsDisplay = $('<img src="' + results[0].thumbnailUrl + '"/>');

                    $(indexToIdMapImage[i]).append(imageResultsDisplay);


                });
        }, i * 500);
    })
}


window.onload = function() {
    $.ajax("/api/comments/", {
        type: "GET",
    }).done(function(response) {
        var results = response;
        // push the results into arrays
        for (var i = 0; i < 5; i++) {
            cityNames.push(results[i].city);
            countryNames.push(results[i].country);
        }
        allCities();
    })



};
