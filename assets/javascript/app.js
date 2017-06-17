


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDgLpYPFelBMVtKFvSmZB8Gj9dbZxDzjGs",
  authDomain: "project-one-7b2df.firebaseapp.com",
  databaseURL: "https://project-one-7b2df.firebaseio.com",
  projectId: "project-one-7b2df",
  storageBucket: "project-one-7b2df.appspot.com",
  messagingSenderId: "628186120697"
};
firebase.initializeApp(config);

var database = firebase.database();

// var player1 = "";

// var player2 = "";

// var player3 = "";

// var player4 = "";

function enterName() {
  var txt;
  var person = $(".userLogin").val().trim();
  //instead of prompt use a input box and btn
  if (person == null || person == "") {
    txt = "lame-o";
    $(".name1").html($("<p>").html(txt));
  } else {


    database.ref("/players").on("value", function (snapshot) {
      console.log('value player 1 ', snapshot.val())
      var player1 = snapshot.child("player1").exists();
      var player2 = snapshot.child("player2").exists();
      console.log(player1);
      console.log(player2);
      if (!player1) {
        //add on click that submits player
        database.ref("/players").set({
          player1: person
        })
      txt = person;
      $(".name1").html($("<p>").html(txt));
      // } else if (snapshot.val().user) {
      //   database.ref("/player2").on("value", function (snapshot) {
      //     if (!snapshot.val().user) {
      //       database.ref("/player2").set({
      //         user: person
      //       })
      //       return;
      //     }
      //   })

    } else if (player1 === true && !player2){
      //use the same on click to add this player
        var addNewPlayer = {};
        addNewPlayer['/player2'] = person;
        database.ref("/players").update(addNewPlayer)
        txt = person;
        $(".name2").html($("<p>").html(txt));       
      }
    

    })
      // $(".player-1").html($("<p>").html(txt));
    };
}

$("#submitBtn").on("click", function(){
enterName();
});
    


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
//   if (running === false) {
//   clearInterval(seconds);
// } else {
//   intervalHandle = setInterval(tick, 1000);
// }
}

function showCountdown(){
	seconds--;
	$(".timer").html('<h3>Time Remaining: ' + seconds + '</h3>');
    if(seconds < 1){
		clearInterval(time);
    }
}


$('#startBtn').on('click', function(){
  $("#startBtn").attr("disabled", true)
    countdown();
});

//HELP US WITH THIS BIBEK!!!!!!!!
// $('.btn-primary').on('click', '.players', function(){
//   var playerName1 = $(this).attr("name");
//   console.log(playerName1);
//   clearTimeout(time);
//   countdown();
// }); the working button is below

$('.btn-primary').on('click', function(){
  clearTimeout(time);
  countdown();
});

$('.player-name').on('click', '.players', function (e) {
  e.preventDefault();
  var playerName = $(this).attr("name");
  var playerPosition = $(this).attr("position");
  var playerValue = $(this).attr("value");
  var playerTeam = $(this).attr("team");
  console.log(playerTeam);


  var html = "<ul>"
  html += "<li> Name: " + playerName + "</li>"
  html += "<li> Team: " + playerTeam + "</li>"
  html += "<li> Position: " + playerPosition + "</li>"
  html += "<li> Value: " + playerValue + "</li>"
  html += "</ul>" 
  // var html = "<ul>Player Name: " + playerName 
  // html += "Player position: " + playerPosition
  // html += "Team: " + playerTeam
   $(".football-player-stats").html(html);
   })


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
         var playerTeam = response.AuctionValues[i].team;
         console.log(playerName);
         console.log(playerPos);
         console.log(playerValue);
				 var playerDiv = $("<div>");
				 var p = $("<a id='player'-" + i + " class='players' data-player='"+playerName+"' data-toggle='modal' data-target='#myModal'>").text(playerName);
				 p.attr("name", playerName);
         p.attr("position", playerPos);
         p.attr("value", playerValue);
         p.attr("team", playerTeam);

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
  
  $('.player-name').on('click', '.players', function (){
	 var player = $(this).attr("name");
   console.log("HERE", player)
      var queryURL2 = "http://api.giphy.com/v1/gifs/search?q=" +
        player + "%nfl" + "&api_key=dc6zaTOxFJmzC&limit=1";

      $.ajax({
          url: queryURL2,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
						console.log(response);
            $("#_giphy_tv").empty();
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var playerImage = $("<img>");
            playerImage.attr("src", results[i].images.fixed_height.url);
            gifDiv.prepend(playerImage);
            $("#_giphy_tv").prepend(gifDiv);
					}
		});
      function slideshow() {

      }

  });
	displayPlayerInfo();