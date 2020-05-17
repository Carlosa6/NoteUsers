const notesCtrl = {};

const Note = require('../models/Note');

//traer todas las notas
notesCtrl.getNotes = async (req,res) => {
    const notes = await Note.find()
    .then(notesItem => {
        const obj = {
            notes:notesItem.map(item => {
                return{
                    id:item._id,
                    title:item.title,
                    content:item.content,
                    date:item.date,
                    author:item.author
                }
            })
        }
        const notes = obj.notes;
        res.json(notes);
    })
    
}

//crear notas
notesCtrl.createNotes = async (req,res) => {
    const { title,content,date,author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    });
    await newNote.save();
    res.json({message:'Note saved'});
}

//traer una nota
notesCtrl.getNoteUan = async (req,res) => {
    const note = await Note.findById(req.params.id)
        .then(data => {
            return{
                id:data.id,
                title:data.title,
                content:data.content,
                date:data.date,
                author:data.author
            }
        })
    res.json(note);
}

//actualizar nota
notesCtrl.updateNote = async (req,res) => {
    const {title,content,date,author} =req.body;
    await Note.findByIdAndUpdate(req.params.id,{
        title,
        author,
        content
    });
    res.json({message:'Note updated'});
}

notesCtrl.deleteNote = async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message:'note Deleted'});
}

module.exports = notesCtrl;