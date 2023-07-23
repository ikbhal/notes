 // Notes Application
 const app = new Vue({
    el: '#app',
    data: {
      notes: [],
      newNote: {
        title: '',
        content: ''
      },
      editedNote: null
    },
    created() {
      // Load notes from local storage
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) {
        this.notes = JSON.parse(savedNotes);
      }
    },
    methods: {
      addNote() {
        this.notes.push({ ...this.newNote });
        this.newNote.title = '';
        this.newNote.content = '';
        this.saveNotes();
      },
      deleteNote(index) {
        this.notes.splice(index, 1);
        this.saveNotes();
      },
      editNote(index) {
        this.editedNote = index;
      },
      saveEdit() {
        this.editedNote = null;
        this.saveNotes();
      },
      cancelEdit() {
        this.editedNote = null;
      },
      saveNotes() {
        localStorage.setItem('notes', JSON.stringify(this.notes));
      }
    }
  });