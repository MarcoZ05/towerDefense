const mapContainer = document.getElementById('map-container')
const mapSpan = document.getElementById('title')
const roundsDiv = document.getElementById('rounds')

//TODO: array with mapAmount * 0
let mapStats =
  localStorage.getItem('mapStats') === null
    ? []
    : localStorage.getItem('mapStats')
