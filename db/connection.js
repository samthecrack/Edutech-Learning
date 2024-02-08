const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite', (err) =>{
    if(err) console.log(err);
    db.run('CREATE TABLE IF NOT EXISTS comentarios (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL, nombre TEXT NOT NULL, comment TEXT NOT NULL)'); 
console.log('base de datos creada')
});
module.exports = db; 