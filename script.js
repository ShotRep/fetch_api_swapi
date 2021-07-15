//Looking through planets in the SW universe.

// fetch("https://swapi.dev/api/planets/")
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`)
//     return response.json()
//   })
//   .then((data) => {
//     console.log("Fetched Planets")
//     const filmURL = data.results[0].films[0]
//     return fetch(filmURL)
//   })
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`)
//     return response.json()
//   })
//   .then((data) => {
//     console.log("Fetched 1st film, based off of planet")
//     console.log(data.title)
//   })
//   .catch((err) => {
//     console.log("Fetch did not complete!")
//     console.log(err)
//   })

//Chaining Fetch
const checkStatusAndParse = (response) => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`)

  return response.json()
}

const printPlanets = (data) => {
  console.log('Loaded 10 more planets...')
  for (let planet of data.results) {
    console.log(planet.name)
  }
  return Promise.resolve(data.next)
}

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return fetch(url)
}

fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
.then(printPlanets)

/*AXIOS LIBRARY - An external library for making HTTP requests.*/
/*We have to include it in our project via script or npm*/
/*From here on out in the course we will be using AXIOS not Fetch */
/*AXIOS simplifies the process of making requests*/
/*AXIOS is using Fetch behind the scenes*/
/*Key differences is that everything is already parsed for us, no more parsing JSON and .catch works, all non 200 status codes actually get caught*/

// axios
//   .get("https://swapi.dev/api/planets")
//   .then((response) => {
//     console.log(response.data.results[0])
//   })
//   .catch((err) => {
//     console.log(err)
//   })
