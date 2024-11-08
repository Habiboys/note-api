const { addNoteHandler, getAllNotesHandler, getNoteByIdhandler, editNoteByIdhandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdhandler,
      },
      {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdhandler,
      },
      {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
      },
  ];
   
  module.exports = routes;