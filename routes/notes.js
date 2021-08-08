const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// const { v4: uuidv4 } = require('uuid');

notes.get('/notes', (req, res) => {

 readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
}


)

module.exports = notes;