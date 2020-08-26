/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)


/***** Deliverable 2 *****/
header.style.color = 'red'


/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

PLAYERS.forEach( e => {
  const playerDiv = document.createElement('div')
  playerDiv.className = 'player'
  playerDiv.dataset.number = e.number
  document.querySelector('.player-container').append(playerDiv)

  const playerName = document.createElement('h3')
  playerName.innerHTML = `
    ${e.name} (<em>${e.nickname}</em>)
    `
  playerDiv.append(playerName)

  const playerImage = document.createElement('img')
  playerImage.src = e.photo
  playerImage.alt = e.name
  playerDiv.append(playerImage)
})


/***** Deliverable 4 *****/
const deletePlayer = document.querySelector('div[data-number="7"]')
deletePlayer.remove()
