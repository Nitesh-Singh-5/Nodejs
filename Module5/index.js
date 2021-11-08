// File System 
// The Node.js file system module allows you to work with the file system on your computer

// File System - Promise API

// const fs = require('fs/promises');
// Both are same
import * as fs from 'fs/promises';  // To load an ES module, set "type": "module" in the package.json or use the .mjs extension. 



// Creating directory Path should be there 
try {
    await fs.mkdir('C:\\Users\\ns987\\OneDrive\\Desktop\\webdev\\Node js\\Module5\\test');     //  { recursive : true } for making two sub folder
    console.log('Directory created');
} catch (error) {
    console.log(error);
}

// Read content of directory 
try {
    const files = await fs.readdir('C:\\Users\\ns987\\OneDrive\\Desktop\\webdev\\Node js\\Module5');
    for (const file of files)
        console.log(file);
} catch (error) {
    console.log(error);
}

// Remove Directory - Directory should be empty
try {
    await fs.rmdir('C:\\Users\\ns987\\OneDrive\\Desktop\\webdev\\Node js\\Module5\\removed');
    console.log("Removed Directory....")
} catch (error) {
    console.log(error);
}

// Create and write files 
try {
    await fs.writeFile('Readme.txt', 'Hello Node js');
} catch (error) {
    console.log(error);
}