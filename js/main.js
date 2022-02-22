//Create an object constructor with properties of website,
//rapid, blitz and bullet

//fetch rapid, blitz, bullet data and store in
// a dotCom object and a lichess object

//for each format, get the data from the objects


fetch('https://api.chess.com/pub/player/tashable')
.then(response => response.json())
.then(data => console.log(data));

fetch('https://lichess.org/api/user/alouette327')
.then(response => response.json())
.then(data => console.log(data));
