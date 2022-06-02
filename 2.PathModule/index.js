// Path module

const path = require('path');

//basename
console.log(path.basename('/Users/dev/Documents/Node JS/2.PathModule/index.js'))
console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js'));

//dirname
console.log(path.dirname(__filename));

//extname
console.log(path.extname(__filename));

//join
console.log(path.join('/search','stack','backend','nodejs'));
// (..) shows go back a directory
console.log(path.join('/search','stack','backend','nodejs','..'));
console.log(path.join('/search','stack','backend','nodejs','..','..'));
console.log(path.join(__dirname,'stack','frontend'));

//normalize
console.log(path.normalize('search///front///back'));

//parse
console.log(path.parse(__filename));

