// Path Module

const path = require('path');

// console.log(path.basename('C:/Users/ns987/OneDriveDesktop/webdev/Node js/index.js'))
// console.log(path.basename(__filename));
// console.log(path.basename(__filename), '.js');

// console.log(path.basename('C:/Users/ns987/OneDriveDesktop/webdev/Node js/index.js'));

// console.log(path.extname(__filename));

// console.log(path.join('/search', 'label', 'course/python', 'oop'));
// console.log(path.join('/search', 'label', 'course/python', 'oop', '..'));

// console.log(path.join(__dirname, 'code', 'allcode.js'));


// console.log(path.normalize('c:\\temp\\\\foo\\bar'));

// console.log(path.parse(__filename));
// console.log(path.parse(__filename).base);
// console.log(path.parse(__filename).name);


// The path.isAbsolute() method returns true if the specified path is an absolute path, otherwise false.

console.log(path.isAbsolute('///server'));    // true
console.log(path.isAbsolute('\\\\server'));    // true
console.log(path.isAbsolute('c:/foo/'));     // true 
console.log(path.isAbsolute('.'));          // false
console.log(path.isAbsolute('bar\\baz'));   // false
