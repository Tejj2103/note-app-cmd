const chalk = require('chalk')
const fs = require('fs')

const addNote = (title, body)=>{
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title )
    const duplicateNote = notes.find((note) => note.title === title) 
    debugger
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    }
    else {
        console.log(chalk.red.inverse("Note Title Taken!"))
    }
}


const removeNotes = (title)=>{
    const notes = loadNotes()
    const notesToKeep  = notes.filter( (note)=> note.title !== title)
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("Note Removed"))
    }else {
        console.log(chalk.red.inverse("Note Not found!"))
    }
        saveNotes(notesToKeep)
}


const listNotes = (title)=>{
    const  notes = loadNotes()
    notes.forEach(note => {
        console.log(chalk.green.inverse(note.title))
        console.log(chalk.green(note.body))
        
    });     
    
}

const readNote =(title)=> {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
        if (note){
            console.log(chalk.red.inverse(note.title))
            console.log(chalk.green.inverse(note.body))
        }
        else {
            console.log(chalk.red.inverse("Note note found"))
        }
        
     
}


const saveNotes = (notes)=>{

    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesJSON)
}


const loadNotes =  ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
};