$(document).ready(function(){
	var authKey = "5af7fa04ca564c049d7e43ef68469a48"
	var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";
	var newSearchValue;
	//on click
	$(".btn").on("click", function(){
		event.preventDefault()
		
		 newSearchValue = $("#search-input").val().trim();

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