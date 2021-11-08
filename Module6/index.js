// File System - Callback API
import * as fs from 'fs';

// Creating Directory - Path should be there
// fs.mkdir('C:\\Users\\ns987\\OneDrive\\Desktop\\webdev\\Node js\\Module6\\test', (error) => {
//     if (error) throw error;
//     console.log("Directory created")
// });

// Creating Directory - Path is not required to be there
// fs.mkdir('C:\\Users\\ns987\\OneDrive\\Desktop\\webdev\\Node js\\Module6\\test', { recursive: true }, (error) => {   // making subfolder
//     if (error) throw error;
//     console.log("Directory created")
// });

// Read Content of Directory
// fs.readdir('C:\\Users\\ns987\\OneDrive\\Desktop\\webdev\\Node js\\Module6', (error, files) => {
//     if (error) throw error;
//     for (const file of files)
//         console.log(file);
// });

// Remove Directory
// fs.rmdir('C:\\Users\\ns987\\OneDrive\\Desktop\\webdev\\Node js\\Module6\\test\\demo', (error) => {
//     if (error) throw error;
//     console.log("Directory Removed..")
// });

// Creating and write files
fs.writeFile('readme.txt', 'Hello Node js', (error) => {
    if (error) throw error;
    console.log("File created...");
});

// Read files
fs.readFile('readme.txt', 'utf-8', (error, data) => {
    if (error) throw error;
    console.log(data);
});

// Append Data into files
fs.appendFile('readme.txt', 'Hello Django', (error) => {
    if (error) throw error;
    console.log("Data Appended...")
});

// Copy file
fs.copyFile('readme.txt', 'test/demo.txt', (error) => {
    if (error) throw error;
    console.log('File Copied..');
});

// Get file info..
fs.stat('C:\\Users\\ns987\\OneDrive\\Desktop\\webdev\\Node js\\Module6\\index.js', (error, stats) => {
    if (error) throw error;
    console.log(stats.isDirectory());
    console.log(stats);
    console.log(stats.isFile())
});