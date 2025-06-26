// createing my own server

// Importing the express module through require
// const express = require('express');

// Importing the express module through import

import express from 'express';

const app = express();
 const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
  
})
