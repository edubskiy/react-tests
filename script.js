const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com',
  'myfavouritecats2.com'
];

const googleSearch = (searchQuery) => {
  const matches = googleDatabase.filter(website => {
    return website.includes(searchQuery);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches
}

console.log(googleSearch('cat'));