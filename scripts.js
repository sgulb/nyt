

// var subject = $("#subject");
// var numberReturn;
// var sYear = $("#sYear").text();
// var eYear = $("#eYear").text();
// var searchButton;
// var clearbutton;

$("#search").on("click", function() {
var apiKey = "34526a482c3149c0ab83e490f05de094";
var numberReturn;
var sYear = $("#sYear").text();
var clearbutton;
var eYear = $("#eYear").text();
var searchButton;
var subject = $("#subject").val();
console.log(subject);
var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + subject + "&api-key=" + apiKey;
console.log(queryUrl);


	$.ajax({
	url: queryUrl,
	method: "GET",
}).done(function(response) {
    
})
})


