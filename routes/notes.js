const notes = require('express').Router();
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');
const notesDB = require('../db/notes.json')
const fs = require('fs')

notes.get('/', (req, res) => {

 readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit note`);
  
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;
  
    // If all the required properties are present
    if (title && text) {
      // Variable for the object we will save
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/notes.json');
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting note');
    }
  });

notes.delete('/:id', (req, res) => {
   const noteToDelete = req.params.id
   console.log(noteToDelete)

    fs.readFile('./db/notes.json', (err,data) => {

        if (err) throw err;

        noteData = JSON.parse(data);

        for (let index = 0; index < noteData.length; index++) {
            if(noteData[index].id == (noteToDelete)) {
                noteData.splice([index], 1);
              }
        } 

        minusDeletedData = JSON.stringify(noteData)

        fs.writeFileSync('./db/notes.json', minusDeletedData, (err, data) => {
            if (err) throw err;
          });
        });
        res.json("Deleted Successfully")
})
 
module.exports = notes;