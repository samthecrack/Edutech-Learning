const db = require('./connection');

let querys = {
    getcomentario: 'SELECT * FROM comentarios',
    insertcomentario: 'INSERT INTO comentarios (email, nombre, comment) VALUES(?, ?, ?)',
    
}
module.exports = {
    insertcomentario(email, nombre, comment){
        return new Promise((resolve, reject) => {
            db.run(querys.insertcomentario, [email, nombre, comment], (err) => {
                if(err) reject(err);
                    resolve()
            })
        })
    
    },

    getcomentario(){
        return new Promise((resolve, reject)=>{
            db.all(querys.getcomentario, (err,rows)=>{
                if(err) reject(err);
                resolve(rows);
            })
        })
    },

}