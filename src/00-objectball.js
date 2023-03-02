function gameObject() {
    return {
        home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: 
          {
            "Alan Anderson": {
              number: "0",    
              shoe: "16",
              points: "22",
              rebounds: "12",
              assists: "12",
              steals: "3",
              blocks: "1",
              slamDunks: "1",
            },
            "Reggie Evans": {
              number: "30",    
              shoe: "14",
              points: "12",
              rebounds: "12",
              assists: "12",
              steals: "12",
              blocks: "12",
              slamDunks: "7",
            },
            "Brook Lopez": {
              number: "11",    
              shoe: "17",
              points: "17",
              rebounds: "19",
              assists: "10",
              steals: "3",
              blocks: "1",
              slamDunks: "15",
            },
             "Mason Plumlee": {
              number: "1",    
              shoe: "19",
              points: "26",
              rebounds: "12",
              assists: "6",
              steals: "3",
              blocks: "8",
              slamDunks: "5",
            },
            "Jason Terry": {
              number: "31",    
              shoe: "15",
              points: "19",
              rebounds: "2",
              assists: "2",
              steals: "4",
              blocks: "11",
              slamDunks: "1",
            },
          },
      },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: 
          {
            "Jeff Adrien": {
              number: "4",    
              shoe: "18",
              points: "10",
              rebounds: "1",
              assists: "1",
              steals: "2",
              blocks: "7",
              slamDunks: "2",
            },
            "Bismak Biyombo": {
              number: "0",    
              shoe: "16",
              points: "12",
              rebounds: "4",
              assists: "7",
              steals: "7",
              blocks: "15",
              slamDunks: "10",
            },
            "DeSagna Diop": {
              number: "2",    
              shoe: "14",
              points: "24",
              rebounds: "12",
              assists: "12",
              steals: "4",
              blocks: "5",
              slamDunks: "5",
            },
            "Ben Gordon": {
              number: "8",    
              shoe: "15",
              points: "33",
              rebounds: "3",
              assists: "2",
              steals: "1",
              blocks: "1",
              slamDunks: "0",
            },
            "Brendan Haywood": {
              number: "33",    
              shoe: "15",
              points: "6",
              rebounds: "12",
              assists: "12",
              steals: "22",
              blocks: "5",
              slamDunks: "12",
            },
          },
        },
}
}

//console.log(gameObject());

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

//console.log(homeTeamName());

const players = {...gameObject().home.players, ...gameObject().away.players}
const game = gameObject();
const homePlayers = game.home.players;
const homeTeam = game.home
const awayTeam = game.away
const teams = [homeTeam, awayTeam]

function numPointsScored(name) {
  return players[name].points
}
console.log(numPointsScored("Brendan Haywood"))

function shoeSize(name) {
  return players[name].shoe
}
console.log(shoeSize("Brendan Haywood"))

function teamColors(team) {
  if(team === homeTeam.teamName){
    return homeTeam.colors
  } else {
    return awayTeam.colors
  }
}
console.log(teamColors("Charlotte Hornets"))

function teamNames(){
  const team = [homeTeam.teamName, awayTeam.teamName]
  return team  
}
console.log(teamNames())

function playerStats(name) {
  return players[name]
}
console.log(playerStats("Brendan Haywood"))

function bigShoeRebounds() {
  let biggestFeet = {shoe: 0}
  for (const player in players){
    if(players[player].shoe > biggestFeet.shoe){
      biggestFeet.shoe = players[player].shoe
      biggestFeet.playerName = player
    }

  }
  console.log(biggestFeet.playerName)
  return players[biggestFeet.playerName].rebounds
}
console.log(bigShoeRebounds())

function mostPointsScored() {
  let topPlayer = {points: 0}
  for(const player in players) {
    console.log(player)
    console.log(topPlayer)
    if(parseInt(players[player].points) > parseInt(topPlayer.points)){
      topPlayer.points = players[player].points
      topPlayer.playerName = player
    }
  }
  console.log(topPlayer)
  return topPlayer.playerName
}
console.log(mostPointsScored())

function winningTeam(){
  let teamPoints = {totalPoints: 0}
  for(const team of teams){
    let points = 0
    console.log(team)
    for(const player in team.players){
      console.log(player)
      points += parseInt(team.players[player].points)
    }if(points > teamPoints.totalPoints){
      teamPoints.totalPoints = points
      teamPoints.teamName = team.teamName
    }
  }
  return teamPoints.teamName
}
console.log(winningTeam())

function playerWithLongestName() {
  let longestPlayer = {nameLength: 0}
  for(const player in players){
    if(player.length > longestPlayer.nameLength){
      longestPlayer.nameLength = player.length
      longestPlayer.name = player
    }
   }
   return longestPlayer.name
}
console.log(playerWithLongestName())