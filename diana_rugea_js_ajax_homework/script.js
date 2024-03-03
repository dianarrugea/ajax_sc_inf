// A generic function that uses fetch to GET a URL and return the responses

function getInfo(url, typeOfResponse, responseId) {
  fetch(url, {
    method: "GET",
    header: {
      "content-type": "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResp) {
      logInfo(jsonResp, typeOfResponse, responseId);

    });
};

// A function that can GET all characters or a single character 
// Needs to call the generic function

function getCharacters(characterId) {
  const charactersURL = "https://rickandmortyapi.com/api/character";
  if (characterId) {
    let urlSingleCharacter = `${charactersURL}/${characterId}`;
    return getInfo(urlSingleCharacter, 4, characterId);
  }
  return getInfo(charactersURL, 1);
};

// Call the character function to fetch all characters and 3 individual calls to get a single character

getCharacters();
getCharacters(1);
getCharacters(2);
getCharacters(3);

// A function that can GET all locations or a single location
// Needs to call the generic function

function getLocations(locationId) {
  const locationURL = "https://rickandmortyapi.com/api/location";
  if (locationId) {
    let urlSingleLocation = `${locationURL}/${locationId}`;
    return getInfo(urlSingleLocation, 5, locationId);
  }
  return getInfo(locationURL, 2);
};

// Call the location function to fetch all locations and 3 individual calls to get a single location

getLocations();
getLocations(1);
getLocations(2);
getLocations(3);

// A function that can GET all episodes or a single episode
// Needs to call the generic function

function getEpisodes(episodeId) {
  const episodesURL = "https://rickandmortyapi.com/api/episode";
  if (episodeId) {
    let urlSingleEpisode = `${episodesURL}/${episodeId}`;
    return getInfo(urlSingleEpisode, 6, episodeId);
  }
  return getInfo(episodesURL, 3);
};

// Call the episode function to fetch all episodes and 3 individual calls to get a single episode

getEpisodes();
getEpisodes(1);
getEpisodes(2);
getEpisodes(3);

// A function that logs the response depending if it is all the episodes/locations/characters or an individual episode/location/character
function logInfo(jsonResp, typeOfResponse, responseId) {
  switch (typeOfResponse) {
    case 1: console.log("All characters: ", jsonResp);
      break;
    case 2: console.log("All locations: ", jsonResp);
      break;
    case 3: console.log("All Episodes: ", jsonResp);
      break;
    case 4: console.log("Character: " + responseId, jsonResp);
      break;
    case 5: console.log("Location: " + responseId, jsonResp);
      break;
    case 6: console.log("Episode: " + responseId, jsonResp);
      break;
    default: console.log("Nothing was logged!");
      break;
  }
}