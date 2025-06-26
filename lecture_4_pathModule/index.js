// console.log("Path Module in Node.js");


import path from 'path';


// join to more file
// join Method
   

const fullPath =  path.join('/path', 'text.jxs', 'index.java');
// console.log("file path is: ", fullPath);

// text.jxs , index.java


// basename Method
  const absolutePath = path.resolve();
   // console.log("we are currently working on: ", absolutePath);

   // output: we are currently working on:  /Users/username/Projects/NodeJS/lecture_4_pathModule
   

   // Extension of the file
    const ext = path.extname('resume.pdf');
    // const ext = path.extname('resume.docx');
    console.log("Extension of the file is: ", ext);

    if (ext === '.pdf'){
      console.log("This is a PDF File");
      // Do something specific for PDF files
    } else{
      console.log("This is not a PDF File");
      
    }
    