fetch('https://api.chess.com/pub/player/tashable')
.then(response => response.json())
.then(data => console.log(data));

fetch('https://lichess.org/api/user/alouette327')
.then(response => response.json())
.then(data => console.log(data));
