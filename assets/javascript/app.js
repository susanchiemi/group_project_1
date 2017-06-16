


//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyDgLpYPFelBMVtKFvSmZB8Gj9dbZxDzjGs",
//     authDomain: "project-one-7b2df.firebaseapp.com",
//     databaseURL: "https://project-one-7b2df.firebaseio.com",
//     projectId: "project-one-7b2df",
//     storageBucket: "project-one-7b2df.appspot.com",
//     messagingSenderId: "628186120697"
//   };
//   firebase.initializeApp(config);

//   var database = firebase.database();

// 	var player1 = "";

// 	var player2 = "";

// 	var player3 = "";

// 	var player4 = "";


// database.ref().set({
// 	player1: playerOne,
// 	player2: playerTwo,
// 	player3: playerThree,
// 	player4: playerFour
       
//       });


  //Chat Box Function 
  $(function(){
$("#addClass").click(function () {
          $('#qnimate').addClass('popup-box-on');
            });
          
            $("#removeClass").click(function () {
          $('#qnimate').removeClass('popup-box-on');
            });
  })
function countdown(){
	seconds = 90;
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
				 var playerName = response.AuctionValues[i].displayName;
         var playerPos = response.AuctionValues[i].position;
         var playerValue = response.AuctionValues[i].avgPrice;
         console.log(playerName);
         console.log(playerPos);
         console.log(playerValue);
				 var playerDiv = $("<div>");
				 var p = $("<a>").text(playerName);
				 playerDiv.append(p);
				 $(".player-name").append(playerDiv);

         var positionDiv = $("<div>");
         var q = $("<a>").text(playerPos);
         positionDiv.append(q);
         $(".position").append(positionDiv);

         var valueDiv = $("<div>");
         var r = $("<a>").text(playerValue);
         valueDiv.append(r);
         $(".value").append(valueDiv);


			 }
			 
			 

			 
			 
	
			});
		}
	displayPlayerInfo();

