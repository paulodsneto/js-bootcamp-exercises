const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise, eating a bit better'
},
    {
    title: 'Office modification',
    body: 'Got a new seat'
}];

const findNote = function (notes, noteTitle) {
    notes.push
   return notes.find(function (note, index) {
        return note.title === noteTitle
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    })
}

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

// console.log(findNotes(notes, 'work'));
// const note = findNote(notes, 'Office modification')

sortNotes(notes)
console.log(notes)

