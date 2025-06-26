//console.log("File Handling in Node.js");

// readfile , createFile, writeFile, appendFile, deleteFile
//import { log } from "console";
import {readFile, writeFile, appendFile, mkdir} from "fs/promises";

// readFile is an asynchronous function that reads the contents of a file

 const read_file = async (fileName) => {
   const data = await readFile(fileName, 'utf-8');
   console.log(data);
 };

 // Call the read_file function with the file name
  // read_file('sample.txt');


  //create a new file
  const create_file = async (fileName, content) => {
    await writeFile(fileName, content);
    console.log(`File ${fileName} created with content: ${content}`);
    
  }

  //create_file('app.jsx', 'This is a Test file created by Node.js');
 // create_file('ai.py', 'create python file with node.js');
  // create_file('index.html', '<!DOCTYPE html><html><head><title>Test</title></head><body><h1>Hello World</h1></body></html>');


// Add new content to an existing file
 
 const append_File = async (fileName, content) => {
  await appendFile(fileName, content);
  console.log("Extra content added successfully!");
 }

//  append_File('app.jsx', ' i am add some react js feature ')



// create folder
const create_folder = async (folderName) => {
await mkdir(folderName, { recursive: true }); // recursive: true allows creating nested folders
console.log("Folder Created Successfully.....!");


}

create_folder('src/py');
