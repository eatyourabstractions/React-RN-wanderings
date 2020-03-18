import React from 'react';
import imageFile from './lizard.jpg';
import SingleLineGridList from './categoryArea';

export function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

export function genImg(len){
const image = {
    src: imageFile,
    alt: 'my image',
    title: 'erasmo',
    imgKey: getRandomString(len),
  };
  return image
}

export default {
  component: SingleLineGridList,
  title: 'category area',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
export function genData(){
var data = [];
var length = 5; // user defined length

for(var i = 0; i < length; i++) {
    data.push(genImg(10));
  }
  return data
}
const lizardData = genData()

export const Default = () => {
    return <SingleLineGridList tileData={lizardData}/> ;
  };

