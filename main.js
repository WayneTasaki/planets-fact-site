async function fetchJson() {
  const response = await fetch('./data.json');
  const data = await response.json();
  return data;
}
fetchJson().then(getPlanets => {
// --- VARIABLES FROM JSON DATA ---
  // MERCURY
  const mercury = getPlanets[0]
  const mercuryName = mercury.name
  const mercuryRotation = mercury.rotation
  const mercuryRevolution = mercury.revolution
  const mercuryRadius = mercury.radius
  const mercuryTemp = mercury.temperature
  const mercuryOverviewText = mercury.overview.content
  const mercuryOverviewSourceLink = mercury.overview.source
  const mercuryOverviewImg = mercury.images.planet
  const mercuryInternalText = mercury.structure.content
  const mercuryInternalSourceLink = mercury.structure.source
  const mercuryInternalImg = mercury.images.internal
  const mercuryGeologyText = mercury.geology.content
  const mercuryGeologySourceLink = mercury.geology.source
  const mercuryGeologyImg = mercury.images.geology

  // VENUS
  const venus = getPlanets[1]
  const venusName = venus.name
  const venusRotation = venus.rotation
  const venusRevolution = venus.revolution
  const venusRadius = venus.radius
  const venusTemp = venus.temperature
  const venusOverviewText = venus.overview.content
  const venusOverviewSourceLink = venus.overview.source
  const venusOverviewImg = venus.images.planet
  const venusInternalText = venus.structure.content
  const venusInternalSourceLink = venus.structure.source
  const venusInternalImg = venus.images.internal
  const venusGeologyText = venus.geology.content
  const venusGeologySourceLink = venus.geology.source
  const venusGeologyImg = venus.images.geology

  // EARTH
  const earth = getPlanets[2]
  const earthName = earth.name
  const earthRotation = earth.rotation
  const earthRevolution = earth.revolution
  const earthRadius = earth.radius
  const earthTemp = earth.temperature
  const earthOverviewText = earth.overview.content
  const earthOverviewSourceLink = earth.overview.source
  const earthOverviewImg = earth.images.planet
  const earthInternalText = earth.structure.content
  const earthInternalSourceLink = earth.structure.source
  const earthInternalImg = earth.images.internal
  const earthGeologyText = earth.geology.content
  const earthGeologySourceLink = earth.geology.source
  const earthGeologyImg = earth.images.geology

  // MARS
  const mars = getPlanets[3]
  const marsName = mars.name
  const marsRotation = mars.rotation
  const marsRevolution = mars.revolution
  const marsRadius = mars.radius
  const marsTemp = mars.temperature
  const marsOverviewText = mars.overview.content
  const marsOverviewSourceLink = mars.overview.source
  const marsOverviewImg = mars.images.planet
  const marsInternalText = mars.structure.content
  const marsInternalSourceLink = mars.structure.source
  const marsInternalImg = mars.images.internal
  const marsGeologyText = mars.geology.content
  const marsGeologySourceLink = mars.geology.source
  const marsGeologyImg = mars.images.geology

  // JUPITER
  const jupiter = getPlanets[4]
  const jupiterName = jupiter.name
  const jupiterRotation = jupiter.rotation
  const jupiterRevolution = jupiter.revolution
  const jupiterRadius = jupiter.radius
  const jupiterTemp = jupiter.temperature
  const jupiterOverviewText = jupiter.overview.content
  const jupiterOverviewSourceLink = jupiter.overview.source
  const jupiterOverviewImg = jupiter.images.planet
  const jupiterInternalText = jupiter.structure.content
  const jupiterInternalSourceLink = jupiter.structure.source
  const jupiterInternalImg = jupiter.images.internal
  const jupiterGeologyText = jupiter.geology.content
  const jupiterGeologySourceLink = jupiter.geology.source
  const jupiterGeologyImg = jupiter.images.geology

  // SATURN
  const saturn = getPlanets[5]
  const saturnName = saturn.name
  const saturnRotation = saturn.rotation
  const saturnRevolution = saturn.revolution
  const saturnRadius = saturn.radius
  const saturnTemp = saturn.temperaturesaturn
  const saturnOverviewText = saturn.overview.content
  const saturnOverviewSourceLink = saturn.overview.source
  const saturnOverviewImg = saturn.images.planet
  const saturnInternalText = saturn.structure.content
  const saturnInternalSourceLink = saturn.structure.source
  const saturnInternalImg = saturn.images.internal
  const saturnGeologyText = saturn.geology.content
  const saturnGeologySourceLink = saturn.geology.source
  const saturnGeologyImg = saturn.images.geology

  // URANUS
  const uranus = getPlanets[6]
  const uranusName = uranus.name
  const uranusRotation = uranus.rotation
  const uranusRevolution = uranus.revolution
  const uranusRadius = uranus.radius
  const uranusTemp = uranus.temperatureuranus
  const uranusOverviewText = uranus.overview.content
  const uranusverviewSourceLink = uranus.overview.source
  const uranusOverviewImg = uranus.images.planet
  const uranusInternalText = uranus.structure.content
  const uranusInternalSourceLink = uranus.structure.source
  const uranusInternalImg = uranus.images.internal
  const uranusGeologyText = uranus.geology.content
  const uranusGeologySourceLink = uranus.geology.source
  const uranusGeologyImg = uranus.images.geology

  // NEPTUNE
  const neptune = getPlanets[7]
  const neptuneName = neptune.name
  const neptuneRotation = neptune.rotation
  const neptuneRevolution = neptune.revolution
  const neptuneRadius = neptune.radius
  const neptuneTemp = neptune.temperatureneptune
  const neptuneOverviewText = neptune.overview.content
  const neptuneOverviewSourceLink = neptune.overview.source
  const neptuneOverviewImg = neptune.images.planet
  const neptuneInternalText = neptune.structure.content
  const neptuneInternalSourceLink = neptune.structure.source
  const neptuneInternalImg = neptune.images.internal
  const neptuneGeologyText = neptune.geology.content
  const neptuneGeologySourceLink = neptune.geology.source
  const neptuneGeologyImg = neptune.images.geologyneptune

// --- VARIABLES FROM DOM ---
  // --- CONTENT ---
  const planetImg = document.getElementById('planetImg')
  const planetGeologyImg = document.getElementById('planetGeologyImg')
  const planetName = document.getElementById('planetName')
  const planetText = document.getElementById('planetText')
  const sourceLink = document.getElementById('sourceLink')
  const rotationText = document.getElementById('rotationText')
  const revolutionText = document.getElementById('revolutionText')
  const radiusText = document.getElementById('radiusText')
  const tempText = document.getElementById('tempText')

// --- BUTTONS ---
  // --- NAV ---
  const mercuryButton = document.getElementById('mercury')
  const venusButton = document.getElementById('venus')
  venusButton.addEventListener('click', displayVenus)
  const earthButton = document.getElementById('earth')
  const marsButton = document.getElementById('mars')
  const jupiterButton = document.getElementById('jupiter')
  const saturnButton = document.getElementById('saturn')
  const uranusButton = document.getElementById('uranus')
  const neptuneButton = document.getElementById('neptune')
  // --- CONTENT BUTTONS ---
  const overviewButton = document.getElementById('overviewButton')
  const internalButton = document.getElementById('internalButton')
  const surfaceButton = document.getElementById('surfaceButton')


// function when nav item is clicked, change: planetImg, planetName, planetText, sourceLink, rotationText, revolutionText, radiusText, tempText, and change overviewButton background to corresponding planet color
function displayVenus() {
  planetImg.src = 'assets/planet-jupiter.svg'
}

});