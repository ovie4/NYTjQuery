$(document).ready(function(){

	var newSearchValue;
	//on click
	$(".btn").on("click", function(){
		event.preventDefault()
		
		 newSearchValue = $("#search-input").val().trim();

	})
	//capture input value
	//get ajax pull
	//display on screen


	//variables for search items
	var searchTerm = "";
	var results = 0;

	var QueryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
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