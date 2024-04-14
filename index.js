express = require('express')
const cors = require('cors')

app = express()
app.use(cors())

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]

app.get('/api/', (req, resp) => {
    resp.send('<h1> hello world </h1>')
})

app.get('/api/notes', (req, resp) => {
    resp.json(notes)
})

app.get('/api/notes/:id', (req, resp) => {
    const noteId = req.params.id
    console.log(noteId);
    const note = notes.find(n => String(n.id) === noteId)
    console.log(note);
    resp.json(note)
})


app.listen(process.env.PORT || 3001)