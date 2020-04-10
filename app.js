const notes  = require('./notes.js');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            descirbe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
             notes.addNote(argv.title, argv.body)
             console.log("Added");
         }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            descirbe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
             notes.removeNotes(argv.title)
         }
})

yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler(argv){
        notes.listNotes(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            descirbe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse();

//node app.js [cmd]
