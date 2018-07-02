
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        var notes = JSON.parse(notesString);
        return notes;
    } catch(e) {
        return [];
    }
}

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

function addNote(title , body) {
    var notes = fetchNotes();

    var note = {
        title ,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.title == title);

    if(duplicateNotes.length === 0 ) {
        notes.push(note);
        saveNote(notes);
        return note;
    };
}

function getAll() {
    console.log(`GetAllNote`);
}

function getNote(title) {
    console.log(`Getnote: ${title}`);
}

function removeNote(title) {
    console.log(`RemoveNote: ${title}`);
}

module.exports = {
    addNote : addNote ,
    getAll : getAll ,
    getNote : getNote ,
    removeNote : removeNote
}