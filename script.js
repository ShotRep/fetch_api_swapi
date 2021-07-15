//Looking through planets in the SW universe.

fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`)
    return response.json()
  })
  .then((data) => {
    console.log("Fetched Planets")
    const filmURL = data.results[0].films[0]
    return fetch(filmURL)
  })
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`)
    return response.json()
  })
  .then((data) => {
    console.log("Fetched 1st film, based off of planet")
    console.log(data.title)
  })
  .catch((err) => {
    console.log("Fetch did not complete!")
    console.log(err)
  })

/*AXIOS LIBRARY - A library for making HTTP requests.*/
/*From here on out int he course we will be using AXIOS not Fetch */
/*AXIOS simplifies the process of making requests*/
/*AXIOS is using Fetch behind the scenes*/