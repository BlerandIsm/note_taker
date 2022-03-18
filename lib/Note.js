const util = require('util');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
let dbPath = path.join(__dirname,'../db/db.json');
//const {note} = require('../db/db.json');

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);
class Save {
    write(note) {
        return writeNote(dbPath, JSON.stringify(note));
    }

    read() {
        return readNote(dbPath, 'utf8');
    }

    retrieveNotes() {
        return this.read().then(function (notes) {
                let parsedNotes;
                try {
                    parsedNotes = [].concat(JSON.parse(notes));
                } catch (err) {
                    parsedNotes = [];
                }
                return parsedNotes;
            });
    }

    addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error('Both title and text can not be blank');
        }
        // Use UUID package to add unique IDs
        const newNote = { title, text, id: uuidv4() };

        // Retrieve Notes, add the new note, update notes
        return this.retrieveNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
    }

    // Delete Note function - BONUS
    deleteNote(id) {
        return this.retrieveNotes()
            .then(notes => notes.filter(note => note.id !== id))
            .then(filteredNotes => this.write(filteredNotes));
    }
}

module.exports = new Save();