$(document).ready(function(){

	var authKey = "5af7fa04ca564c049d7e43ef68469a48"
	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";
	var newSearchValue;


	var results;

	//on click
	$(".btn").on("click", function(){
		event.preventDefault()
		
		 results = $("#search-input").val().trim();

	});
	//capture input value
	//get ajax pull

	$.ajax({
		url: queryURL,
		method:"GET"
		}).done(function(){
			console.log(newSearchValue)
		});
	//display on screen


	//variables for search items

	

});

//display on screen
function displayResults(){
	var resultsDiv = $("<div>");
	for (var i = 0; i < ajax_data.length; i++) {
		var newArticle = ajax_data[i].headline;
		resultsDiv.append(newArticle);
		$("#search-results").append(resultsDiv);
	}
}

