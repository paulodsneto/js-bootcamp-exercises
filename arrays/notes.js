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

const filterNotes = notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes('ne');
    const isBodyMatch = note.body.toLowerCase().includes('ne');
    return isTitleMatch || isBodyMatch;
})
console.log(filterNotes);

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex((note, index) => {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'Office modification')
// console.log(note)
