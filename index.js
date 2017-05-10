
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous", true);
xhr.setRequestHeader("X-Mashape-Key", "yA0hUy71G0msh9PZ7bFyQ9Q46rwgp1YgetAjsnQTQXv5OkJjtb", false);
xhr.setRequestHeader("Accept", "application/json", false);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded", false);
xhr.onload = function (event) {
  	if (xhr.readyState === 4 && xhr.status === 200){
  		let response = JSON.parse(xhr.responseText);
      	console.log("Quote Text: " + response.quote);
      	console.log("Quote Author: " + response.author);
  	} else {
      	console.error(xhr.statusText);
  	}
};

xhr.onerror = function (event) {
  console.error(xhr.statusText);
};
xhr.send(null);