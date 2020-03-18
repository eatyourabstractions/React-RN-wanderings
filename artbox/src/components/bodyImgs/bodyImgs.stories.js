import React from 'react';
import  BodyImgGrid from '../bodyImgs/bodyImgs';

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

function oneOrTwo(){
    let cols = Math.floor(Math.random() * 3);
    if(cols === 0){
        return oneOrTwo();
    } else{
        return cols
    }
}

function genImg(len){
const image = {
    src: 'https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-039.jpg',
    alt: 'my image',
    title: 'rojo',
    imgKey: getRandomString(len),
    cols: oneOrTwo(),
  };
  return image
}

export default {
  component: BodyImgGrid,
  title: 'body of images',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
function genData(){
var data = [];
var length = 20; // user defined length

for(var i = 0; i < length; i++) {
    data.push(genImg(10));
  }
  return data
}
const lizardData = genData()

export const Default = () => {
    return <BodyImgGrid tileData={lizardData}/> ;
  };

