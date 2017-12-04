$(document).ready(function(){

	var results;
	//on click
	$(".btn").on("click", function(){
		event.preventDefault()
		
		 results = $("#search-input").val().trim();

	})
	//capture input value
	//get ajax pull
	


	//variables for search items
	var searchTerm = "";
	var results = 0;

	var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "5af7fa04ca564c049d7e43ef68469a48"
});


$.ajax({
  url: queryUrl,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

})

//display on screen
function displayResults(){
	var resultsDiv = $("<div>");
	for (var i = 0; i < ajax_data.length; i++) {
		var newArticle = ajax_data[i].headline;
		resultsDiv.append(newArticle);
		$("#search-results").append(resultsDiv);
	}
}

