const express = require('express')
const app = express() 
const PORT = 5000

const wizwitches = {

  'harry potter': {
    'house': 'Gryffindor',
    'wand core': 'Pheonix Feather',
    'patronous': 'Stag'
  },
  'albus dumbledore': {
    'house': 'Gryffindor',
    'wand core': 'Unknown',
    'patronous': 'Pheonix'
  },
  'severus snape': {
    'house': 'Slytherin',
    'wand core': 'Unknown',
    'patronous': 'Doe'
  },
  'unknown': {
    'house': 'Unknown',
    'wand core': 'Unknown',
    'patronous': 'Unknown'
  }

}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
  const wizName = req.params.name.toLowerCase()

  if ( wizwitches[wizName] ) {
    res.json(wizwitches[wizName])
  } else {
    res.json(wizwitches['unknown'])
  }
  
})

app.listen(PORT, () => {
  console.log(`The server is now runing on port ${PORT}! Betta go catch it!`)
})