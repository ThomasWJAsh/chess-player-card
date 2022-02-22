//Create an object constructor with properties of website,
//rapid, blitz and bullet

function playerData(website, rapid, blitz, bullet) {
  this.website = website;
  this.rapid = rapid;
  this.blitz = blitz;
  this.bullet = bullet;
}

//fetch rapid, blitz, bullet data and store in
// a dotCom object and a lichess object

async function getDotComData() {

  const profile = await fetch('https://api.chess.com/pub/player/tashable/stats')
  .then(response => response.json())
  .then(data => {return data})

  const dotCom = new playerData("chess.com", profile.chess_rapid.last.rating, profile.chess_blitz.last.rating, profile.chess_bullet.last.rating)

  return dotCom
};
async function getLichessData() {

  const profile = await fetch('https://lichess.org/api/user/alouette327')
  .then(response => response.json())
  .then(data => {return data})
  const lichess = new playerData("lichess", profile.perfs.rapid.rating, profile.perfs.blitz.rating, profile.perfs.bullet.rating)

  return lichess
};

async function getMyStats() {

  lichess = await getLichessData();
  dotCom = await getDotComData();

  return [dotCom, lichess]

}

function addToChart(data) {
//data is an array, dotCom object is at [0], lichess at [1]
//
  const rapidData = [data[0].rapid, data[1].rapid, (data[1].rapid - data[0].rapid)]
  const blitzData = [data[0].blitz, data[1].blitz, (data[1].blitz - data[0].blitz)]
  const bulletData = [data[0].bullet, data[1].bullet, (data[1].bullet - data[0].bullet)]

  const rapidCells = document.querySelectorAll(".cell.rapid");
  const blitzCells = document.querySelectorAll(".cell.blitz");
  const bulletCells = document.querySelectorAll(".cell.bullet");

  function addToCell(cell, i, ratingData) {
    let rating = ratingData[i];
    const h4 = document.createElement('h4')
    h4.innerHTML = `${rating}`
    cell.appendChild(h4);
  }

  rapidCells.forEach((cell, i) => addToCell(cell, i, rapidData));
  blitzCells.forEach((cell, i) => addToCell(cell, i, blitzData));
  bulletCells.forEach((cell, i) => addToCell(cell, i, bulletData));
}
getMyStats()
.then(data => addToChart(data));


//for each format, get the data from the objects, insert
//into the correct field, then subtract dotCom from Lichess
