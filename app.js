const _= require('lodash');
const item= [1,[2,[4,[6]]]];
const newItem=_.flattenDeep(item);
console.log(newItem);