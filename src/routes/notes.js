const { Router } = require('express');
const router = Router();

const { getNotes,
        createNotes,
        getNoteUan,
        updateNote,
        deleteNote 
        } = require('../controllers/notes.controllers');

router.route('/')
    .get(getNotes)
    .post(createNotes)


router.route('/:id')
    .get(getNoteUan)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;
