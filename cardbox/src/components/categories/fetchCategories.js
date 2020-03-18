/*
what is what you want to do?

list of approved words:
-- romanticism
-- abstract
-- impressionism
-- renaissance
-- modern
-- american
-- asia
-- realism
-- gothic
-- feminism
*/

import axios from 'axios';

export default async function getMeOne(category) {
const result = await axios.get(
    'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=' + category,
  );

   return result.data
}


