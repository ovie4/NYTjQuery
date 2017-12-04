$(document).ready(function() {


    var results;
    var searchData;

    function getArticles(results) {
        var authKey = "5af7fa04ca564c049d7e43ef68469a48"
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
            authKey + "&q=" + results;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            console.log(response);
            searchData=response.response.docs;
             displayResults(searchData);
        });
    }

    function displayResults(data) {
        var resultsDiv = $("<div>");
        console.log(data);
        for (var i = 0; i < data.length ; i++) {

            var newArticle = data[i].snippet;
            console.log(newArticle);
            resultsDiv.append(newArticle);
            $("#search-response").append(resultsDiv);
        }
    }

    //on click
    //capture input value

    $(".btn").on("click", function() {
        event.preventDefault();
        
        results = $("#search-input").val().trim();
        getArticles(results);
        
       


    });

    //get ajax pull

    //display on screen
    //display on screen



    //variables for search items



});