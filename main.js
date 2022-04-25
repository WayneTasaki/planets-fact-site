async function fetchJson() {
  const response = await fetch('./data.json');
  const data = await response.json();
  return data;
}
fetchJson().then(getPlanets => {
  // need sections for image, name, content, source link, rotation time, revolution time, radius, average temp
let mercury = getPlanets[0]
mercuryOverviewImg = mercury.images.planet
mercuryInternalImg = mercury.images.internal
mercuryGeologyImg = mercury.images.geology
let venus = getPlanets[1]
let earth = getPlanets[2]
let mars = getPlanets[3]
let jupiter = getPlanets[4]
let saturn = getPlanets[5]
let uranus = getPlanets[6]
let neptune = getPlanets[7]

console.log(mercuryGeologyImg)
});