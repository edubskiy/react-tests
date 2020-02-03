const fetch = require('node-fetch');

const getPeople = async (fetch) => {
  const request = await fetch('https://swapi.co/api/people');
  const data = await request.json();
  return {
    count: data.count,
    results: data.results
  }
}

module.exports = {
  getPeople
}
