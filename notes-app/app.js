const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Alisa Luomanmäki.')

try {
    fs.appendFileSync('notes.txt', ' Apped to file')
} catch (err) {
    console.log('Error has found')
}