function countdown(){
	seconds = 60;
	$(".timer").html('<h3>Time Remaining: ' + seconds + '</h3>');
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$(".timer").html('<h3>Time Remaining: ' + seconds + '</h3>');
    if(seconds < 1){
		clearInterval(time);
    }
}

countdown();

  function displayPlayerInfo() {
        
      var queryURL = "https://www.fantasyfootballnerd.com/service/auction/json/9azppczwsynp/";
      
			$.ajax({
      url: queryURL,
      method: "GET",
      }).done(function(response) {
      console.log(response);
			 for (var i = 0; i < response.AuctionValues.length; i++){
				 console.log(response.AuctionValues[i].displayName);
				 var playerDiv = $("<div>");
				 var p = $("<a>").text(response.AuctionValues[i].displayName);
				 playerDiv.append(p);
				 $(".available-players").append(playerDiv);


			 }
			 
			 

			 
			 
	
			});
		}
	displayPlayerInfo();

	