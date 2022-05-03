window.onload = () => {
  if (window.innerWidth > 660) {
  overviewButton.style.backgroundColor = '#419EBB'
  internalButton.style.backgroundColor = ''
  surfaceButton.style.backgroundColor = ''
  } else {
    overviewButtonMobile.classList.add('active')
    overviewButtonMobile.style.borderColor = '#419EBB'
    internalButtonMobile.style.backgroundColor = ''
    surfaceButtonMobile.style.backgroundColor = ''
  }
}



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
  const mercuryColor = 'var(--mercury-color)'
  const planetMercury = [mercuryName, mercuryRotation, mercuryRevolution, mercuryRadius, mercuryTemp, mercuryOverviewText, mercuryOverviewSourceLink, mercuryOverviewImg, mercuryInternalText, mercuryInternalSourceLink, mercuryInternalImg, mercuryGeologyText, mercuryGeologySourceLink, mercuryGeologyImg, mercuryColor]

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
  const venusColor = 'var(--venus-color)'
  const planetVenus = [venusName, venusRotation, venusRevolution, venusRadius, venusTemp, venusOverviewText, venusOverviewSourceLink, venusOverviewImg, venusInternalText, venusInternalSourceLink, venusInternalImg, venusGeologyText, venusGeologySourceLink, venusGeologyImg, venusColor]

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
  const earthColor = 'var(--earth-color)'
  const planetEarth = [earthName, earthRotation, earthRevolution, earthRadius, earthTemp, earthOverviewText, earthOverviewSourceLink, earthOverviewImg, earthInternalText, earthInternalSourceLink, earthInternalImg, earthGeologyText, earthGeologySourceLink, earthGeologyImg, earthColor]

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
  const marsColor = 'var(--mars-color)'
  const planetMars = [marsName, marsRotation, marsRevolution, marsRadius, marsTemp, marsOverviewText, marsOverviewSourceLink, marsOverviewImg, marsInternalText, marsInternalSourceLink, marsInternalImg, marsGeologyText, marsGeologySourceLink, marsGeologyImg, marsColor]

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
  const jupiterColor = 'var(--jupiter-color)'
  const planetJupiter = [jupiterName, jupiterRotation, jupiterRevolution, jupiterRadius, jupiterTemp, jupiterOverviewText, jupiterOverviewSourceLink, jupiterOverviewImg, jupiterInternalText, jupiterInternalSourceLink, jupiterInternalImg, jupiterGeologyText, jupiterGeologySourceLink, jupiterGeologyImg, jupiterColor]

  // SATURN
  const saturn = getPlanets[5]
  const saturnName = saturn.name
  const saturnRotation = saturn.rotation
  const saturnRevolution = saturn.revolution
  const saturnRadius = saturn.radius
  const saturnTemp = saturn.temperature
  const saturnOverviewText = saturn.overview.content
  const saturnOverviewSourceLink = saturn.overview.source
  const saturnOverviewImg = saturn.images.planet
  const saturnInternalText = saturn.structure.content
  const saturnInternalSourceLink = saturn.structure.source
  const saturnInternalImg = saturn.images.internal
  const saturnGeologyText = saturn.geology.content
  const saturnGeologySourceLink = saturn.geology.source
  const saturnGeologyImg = saturn.images.geology
  const saturnColor = 'var(--saturn-color)'
  const planetSaturn = [saturnName, saturnRotation, saturnRevolution, saturnRadius, saturnTemp, saturnOverviewText, saturnOverviewSourceLink, saturnOverviewImg, saturnInternalText, saturnInternalSourceLink, saturnInternalImg, saturnGeologyText, saturnGeologySourceLink, saturnGeologyImg, saturnColor]

  // URANUS
  const uranus = getPlanets[6]
  const uranusName = uranus.name
  const uranusRotation = uranus.rotation
  const uranusRevolution = uranus.revolution
  const uranusRadius = uranus.radius
  const uranusTemp = uranus.temperature
  const uranusOverviewText = uranus.overview.content
  const uranusOverviewSourceLink = uranus.overview.source
  const uranusOverviewImg = uranus.images.planet
  const uranusInternalText = uranus.structure.content
  const uranusInternalSourceLink = uranus.structure.source
  const uranusInternalImg = uranus.images.internal
  const uranusGeologyText = uranus.geology.content
  const uranusGeologySourceLink = uranus.geology.source
  const uranusGeologyImg = uranus.images.geology
  const uranusColor = 'var(--uranus-color)'
  const planetUranus = [uranusName, uranusRotation, uranusRevolution, uranusRadius, uranusTemp, uranusOverviewText, uranusOverviewSourceLink, uranusOverviewImg, uranusInternalText, uranusInternalSourceLink, uranusInternalImg, uranusGeologyText, uranusGeologySourceLink, uranusGeologyImg, uranusColor]

  // NEPTUNE
  const neptune = getPlanets[7]
  const neptuneName = neptune.name
  const neptuneRotation = neptune.rotation
  const neptuneRevolution = neptune.revolution
  const neptuneRadius = neptune.radius
  const neptuneTemp = neptune.temperature
  const neptuneOverviewText = neptune.overview.content
  const neptuneOverviewSourceLink = neptune.overview.source
  const neptuneOverviewImg = neptune.images.planet
  const neptuneInternalText = neptune.structure.content
  const neptuneInternalSourceLink = neptune.structure.source
  const neptuneInternalImg = neptune.images.internal
  const neptuneGeologyText = neptune.geology.content
  const neptuneGeologySourceLink = neptune.geology.source
  const neptuneGeologyImg = neptune.images.geologyneptune
  const neptuneColor = 'var(--neptune-color)'
  const planetNeptune = [neptuneName, neptuneRotation, neptuneRevolution, neptuneRadius, neptuneTemp, neptuneOverviewText, neptuneOverviewSourceLink, neptuneOverviewImg, neptuneInternalText, neptuneInternalSourceLink, neptuneInternalImg, neptuneGeologyText, neptuneGeologySourceLink, neptuneGeologyImg, neptuneColor]

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
  mercuryButton.addEventListener('click', () => changePlanet(planetMercury))
  const venusButton = document.getElementById('venus')
  venusButton.addEventListener('click', () => changePlanet(planetVenus))
  const earthButton = document.getElementById('earth')
  earthButton.addEventListener('click', () => changePlanet(planetEarth))
  const marsButton = document.getElementById('mars')
  marsButton.addEventListener('click', () => changePlanet(planetMars))
  const jupiterButton = document.getElementById('jupiter')
  jupiterButton.addEventListener('click', () => changePlanet(planetJupiter))
  const saturnButton = document.getElementById('saturn')
  saturnButton.addEventListener('click', () => changePlanet(planetSaturn))
  const uranusButton = document.getElementById('uranus')
  uranusButton.addEventListener('click', () => changePlanet(planetUranus))
  const neptuneButton = document.getElementById('neptune')
  neptuneButton.addEventListener('click', () => changePlanet(planetNeptune))

  // --- CONTENT BUTTONS ---
  const overviewButton = document.getElementById('overviewButton')
  overviewButton.addEventListener('click', () => overviewChange())
  const internalButton = document.getElementById('internalButton')
  internalButton.addEventListener('click', () => internalStructureChange())
  const surfaceButton = document.getElementById('surfaceButton')
  surfaceButton.addEventListener('click', () => surfaceGeologyChange())

  // Mobile Content Buttons
  const overviewButtonMobile = document.getElementById('overviewButtonMobile')
  overviewButtonMobile.addEventListener('click', () => overviewChange())
  const internalButtonMobile = document.getElementById('internalButtonMobile')
  internalButtonMobile.addEventListener('click', () => internalStructureChange())
  const surfaceButtonMobile = document.getElementById('surfaceButtonMobile')
  surfaceButtonMobile.addEventListener('click', () => surfaceGeologyChange())


// function when nav item is clicked, change: planetImg, planetName, planetText, sourceLink, rotationText, revolutionText, radiusText, tempText, and change overviewButton background to corresponding planet color
// main function that's fired when nav link is clicked.
function changePlanet(planet) {
    planetName.classList.add('hide');
    rotationText.classList.add('hide')
    revolutionText.classList.add('hide')
    radiusText.classList.add('hide')
    tempText.classList.add('hide')
    planetText.classList.add('hide')
    planetImg.classList.add('hide')
    planetGeologyImg.classList.add('hide')
    overviewButton.style.backgroundColor = ''
    internalButton.style.backgroundColor = ''
    surfaceButton.style.backgroundColor = ''
    overviewButtonMobile.classList.remove('active')
    internalButtonMobile.classList.remove('active')
    surfaceButtonMobile.classList.remove('active')
    overviewButtonMobile.style.borderColor = ''
    internalButtonMobile.style.borderColor = ''
    surfaceButtonMobile.style.borderColor = ''

    
    setTimeout(function() { 
      planetName.classList.remove('hide')
      rotationText.classList.remove('hide')
      revolutionText.classList.remove('hide')
      radiusText.classList.remove('hide')
      tempText.classList.remove('hide')
      planetText.classList.remove('hide')
      sourceLink.classList.remove('hide')
      planetImg.classList.remove('hide')
      planetName.innerText = planet[0]
      rotationText.innerText = planet[1]
      revolutionText.innerText = planet[2]
      radiusText.innerText = planet[3]
      tempText.innerText = planet[4]
      planetText.innerText = planet[5]
      sourceLink.href = planet[6]
      planetImg.src = planet[7]
      planetGeologyImg.src = planet[13]
      overviewButton.style.backgroundColor = planet[14]
      overviewButtonMobile.style.borderColor = planet[14]
      overviewButtonMobile.classList.add('active')
    }, 400);
}

function internalStructureChange() {
  let planetPage = planetName.innerText
    // classList.add 'hide' - fade out everything that changes when switching to internal structure info
    planetText.classList.add('hide')
    planetImg.classList.add('hide')
    planetGeologyImg.classList.add('hide')
    overviewButton.style.backgroundColor = ''
    overviewButtonMobile.classList.remove('active')
    overviewButtonMobile.style.borderColor = ''
    surfaceButton.style.backgroundColor = ''
    surfaceButtonMobile.classList.remove('active')
    surfaceButtonMobile.style.borderColor = ''
    setTimeout(function() { 
      // classList.remove 'hide' - fade in all the same info from above
      planetText.classList.remove('hide')
      planetImg.classList.remove('hide')
      if (planetPage === 'MERCURY') {
        planetText.innerText = planetMercury[8]
        sourceLink.href = planetMercury[9]
        planetImg.src = planetMercury[10]
        internalButton.style.backgroundColor = mercuryColor
        internalButtonMobile.classList.add('active')
        internalButtonMobile.style.borderColor = mercuryColor
      }
      if (planetPage === 'VENUS') {
        planetText.innerText = planetVenus[8]
        sourceLink.href = planetVenus[9]
        planetImg.src = planetVenus[10]
        internalButton.style.backgroundColor = venusColor
        internalButtonMobile.classList.add('active')
        internalButtonMobile.style.borderColor = venusColor
      }
      if (planetPage === 'EARTH') {
        planetText.innerText = planetEarth[8]
        sourceLink.href = planetEarth[9]
        planetImg.src = planetEarth[10]
        internalButton.style.backgroundColor = earthColor
        internalButtonMobile.classList.add('active')
        internalButtonMobile.style.borderColor = earthColor
      }
      if (planetPage === 'MARS') {
        planetText.innerText = planetMars[8]
        sourceLink.href = planetMars[9]
        planetImg.src = planetMars[10]
        internalButton.style.backgroundColor = marsColor
        internalButtonMobile.classList.add('active')
        internalButtonMobile.style.borderColor = marsColor
      }
      if (planetPage === 'JUPITER') {
        planetText.innerText = planetJupiter[8]
        sourceLink.href = planetJupiter[9]
        planetImg.src = planetJupiter[10]
        internalButton.style.backgroundColor = jupiterColor
        internalButtonMobile.classList.add('active')
        internalButtonMobile.style.borderColor = jupiterColor
      }
      if (planetPage === 'SATURN') {
        planetText.innerText = planetSaturn[8]
        sourceLink.href = planetSaturn[9]
        planetImg.src = planetSaturn[10]
        internalButton.style.backgroundColor = saturnColor
        internalButtonMobile.classList.add('active')
        internalButtonMobile.style.borderColor = saturnColor
      }
      if (planetPage === 'URANUS') {
        planetText.innerText = planetUranus[8]
        sourceLink.href = planetUranus[9]
        planetImg.src = planetUranus[10]
        internalButton.style.backgroundColor = uranusColor
        internalButtonMobile.classList.add('active')
        internalButtonMobile.style.borderColor = uranusColor
      }
      if (planetPage === 'NEPTUNE') {
        planetText.innerText = planetNeptune[8]
        sourceLink.href = planetNeptune[9]
        planetImg.src = planetNeptune[10]
        internalButton.style.backgroundColor = neptuneColor
        internalButtonMobile.classList.add('active')
        internalButtonMobile.style.borderColor = neptuneColor
      }
    }, 300);
}

function surfaceGeologyChange() {
  let planetPage = planetName.innerText
  planetText.classList.add('hide')
  planetImg.classList.add('hide')
  overviewButton.style.backgroundColor = ''
  internalButton.style.backgroundColor = ''
  overviewButtonMobile.classList.remove('active')
  overviewButtonMobile.style.borderColor = ''
  internalButtonMobile.classList.remove('active')
  internalButtonMobile.style.borderColor = ''
  setTimeout(function() { 
    // classList.remove 'hide' - fade in all the same info from above
    planetText.classList.remove('hide')
    planetImg.classList.remove('hide')
    if (planetPage === 'MERCURY') {
      planetText.innerText = planetMercury[11]
      sourceLink.href = planetMercury[12]
      planetImg.src = planetMercury[7]
      planetGeologyImg.classList.remove('hide')
      surfaceButton.style.backgroundColor = mercuryColor
      surfaceButtonMobile.classList.add('active')
      surfaceButtonMobile.style.borderColor = mercuryColor
    }
    if (planetPage === 'VENUS') {
      planetText.innerText = planetVenus[8]
      sourceLink.href = planetVenus[9]
      planetImg.src = planetVenus[7]
      planetGeologyImg.classList.remove('hide')
      surfaceButton.style.backgroundColor = venusColor
      surfaceButtonMobile.classList.add('active')
      surfaceButtonMobile.style.borderColor = venusColor
    }
    if (planetPage === 'EARTH') {
      planetText.innerText = planetEarth[8]
      sourceLink.href = planetEarth[9]
      planetImg.src = planetEarth[7]
      planetGeologyImg.classList.remove('hide')
      surfaceButton.style.backgroundColor = earthColor
      surfaceButtonMobile.classList.add('active')
      surfaceButtonMobile.style.borderColor = earthColor
    }
    if (planetPage === 'MARS') {
      planetText.innerText = planetMars[8]
      sourceLink.href = planetMars[9]
      planetImg.src = planetMars[7]
      planetGeologyImg.classList.remove('hide')
      surfaceButton.style.backgroundColor = marsColor
      surfaceButtonMobile.classList.add('active')
      surfaceButtonMobile.style.borderColor = marsColor
    }
    if (planetPage === 'JUPITER') {
      planetText.innerText = planetJupiter[8]
      sourceLink.href = planetJupiter[9]
      planetImg.src = planetJupiter[7]
      planetGeologyImg.classList.remove('hide')
      surfaceButton.style.backgroundColor = jupiterColor
      surfaceButtonMobile.classList.add('active')
      surfaceButtonMobile.style.borderColor = jupiterColor
    }
    if (planetPage === 'SATURN') {
      planetText.innerText = planetSaturn[8]
      sourceLink.href = planetSaturn[9]
      planetImg.src = planetSaturn[7]
      planetGeologyImg.classList.remove('hide')
      surfaceButton.style.backgroundColor = saturnColor
      surfaceButtonMobile.classList.add('active')
      surfaceButtonMobile.style.borderColor = saturnColor
    }
    if (planetPage === 'URANUS') {
      planetText.innerText = planetUranus[8]
      sourceLink.href = planetUranus[9]
      planetImg.src = planetUranus[7]
      planetGeologyImg.classList.remove('hide')
      surfaceButton.style.backgroundColor = uranusColor
      surfaceButtonMobile.classList.add('active')
      surfaceButtonMobile.style.borderColor = uranusColor
    }
    if (planetPage === 'NEPTUNE') {
      planetText.innerText = planetNeptune[8]
      sourceLink.href = planetNeptune[9]
      planetImg.src = planetNeptune[7]
      planetGeologyImg.classList.remove('hide')
      surfaceButton.style.backgroundColor = neptuneColor
      surfaceButtonMobile.classList.add('active')
      surfaceButtonMobile.style.borderColor = neptuneColor
    }
  }, 300);
}

function overviewChange() {
  function planetOverview(planet) {
    planetText.classList.add('hide')
    planetImg.classList.add('hide')
    planetGeologyImg.classList.add('hide')
    overviewButton.style.backgroundColor = 'transparent'
    internalButton.style.backgroundColor = 'transparent'
    surfaceButton.style.backgroundColor = 'transparent'
    setTimeout(function() { 
      planetText.classList.remove('hide')
      sourceLink.classList.remove('hide')
      planetImg.classList.remove('hide')
      planetName.innerText = planet[0]
      rotationText.innerText = planet[1]
      revolutionText.innerText = planet[2]
      radiusText.innerText = planet[3]
      tempText.innerText = planet[4]
      planetText.innerText = planet[5]
      sourceLink.href = planet[6]
      planetImg.src = planet[7]
      planetGeologyImg.src = planet[13]
      overviewButton.style.backgroundColor = planet[14]
      overviewButtonMobile.style.borderColor = planet[14]
      overviewButtonMobile.classList.add('active')
    }, 400);
}
  let planetPage = planetName.innerText
  internalButton.style.backgroundColor = ''
  internalButtonMobile.classList.remove('active')
  internalButtonMobile.style.borderColor = ''
  surfaceButton.style.backgroundColor = ''
  surfaceButtonMobile.classList.remove('active')
  surfaceButtonMobile.style.borderColor = ''

  if (planetPage === 'MERCURY') {
    planetOverview(planetMercury)    
  }
  if (planetPage === 'VENUS') {
    planetOverview(planetVenus) 
  }
  if (planetPage === 'EARTH') {
    planetOverview(planetEarth) 
  }
  if (planetPage === 'MARS') {
    planetOverview(planetMars) 
  }
  if (planetPage === 'JUPITER') {
    planetOverview(planetJupiter) 
  }
  if (planetPage === 'SATURN') {
    planetOverview(planetSaturn) 
  }
  if (planetPage === 'URANUS') {
    planetOverview(planetUranus) 
  }
  if (planetPage === 'NEPTUNE') {
    planetOverview(planetNeptune) 
  }
}
});


// HAMBURGER MENU
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const main = document.getElementById('main')

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "";
    main.classList.remove('hide')
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "";
    menuIcon.style.display = "none";
    main.classList.add('hide')
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(function(menuItem) { 
    menuItem.addEventListener("click", () => {
      if (window.innerWidth <= 660) {
        toggleMenu()
      }
    })
})




// set your own values between here
let maxFontSize = 28.75
let minFontSize = 19.625
let maxWidth = 41.25
let minWidth = 23.438
// set your own values between here

let slope = (maxFontSize - minFontSize) / (maxWidth - minWidth)
let yAxisIntersection = -minWidth * slope + minFontSize
let clampSlope = slope * 100
let finalClamp = `clamp(${minFontSize}rem, ${yAxisIntersection.toFixed(4)}rem + ${clampSlope.toFixed(4)}vw, ${maxFontSize}rem);`

// copy paste the string into your css!
console.log(finalClamp)



// let preferredValue = yAxisIntersection[rem] + (slope * 100)[vw]
// console.log(yAxisIntersection)
// 1.25rem ,0.809rem + 1.877vw, 2.5rem

// clamp(0.5rem, 0.4338009074246567rem + 0.2824434361948258vw, 0.688rem)