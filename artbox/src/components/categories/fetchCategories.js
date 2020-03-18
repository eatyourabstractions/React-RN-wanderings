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

function nRandomElemsFrom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}


export default async function loadData() {
  const art_movements_arr = ['romanticism', 'abstract', 'impressionism', 'renaissance', 'modern', 'american', 'asia', 'realism', 'gothic','feminism']
  const art_movements_search_url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q='
  const artPiece_search_url = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
  let categories = [];
  let otherImgs = [];

  for(let i = 0; i < art_movements_arr.length; i++){
   let movement = art_movements_arr[i]
   let bigID_arr = await axios.get(art_movements_search_url + movement)
   let smallId_arr = nRandomElemsFrom(bigID_arr.data.objectIDs, 6)
   for(let j = 0; j < smallId_arr.length; j++){
     let img_url = await axios.get(artPiece_search_url + smallId_arr[j])
     otherImgs.push(new makeImage(img_url.data.primaryImage, movement))
   }
   categories.push(otherImgs.pop())

  }
  return [categories, otherImgs]
}



function makeImage(url, name){
  this.src = url;
  this.alt = 'my img';
  this.title = name;
  this.imgKey = url;
  this.cols = Math.floor(Math.random() * 3);

}