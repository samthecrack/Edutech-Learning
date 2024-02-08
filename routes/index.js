var express = require('express');
var router = express.Router();
const db = require('../db/models');

// vista principal
router.get('/', function(req, res, next) {
  res.render('view');
})


// mision
router.get('/mision', (req, res) => {
  res.render('mision')
} )


// vision
router.get('/vision', (req, res) => {
  res.render('vision')
} )


// contacto
router.get('/contacto', (req, res) => {
  res.render('contacto')
} )

router.post('/contacto', (req, res) => {
  const {email, nombre, comment} = req.body;
  db.insertcomentario(email, nombre, comment)
  .then(() => {
     res.redirect('comentarios')
  })
  .catch(err => {
    console.log(err);
  })
});


// comentarios
router.get('/comentarios', (req, res) => {
  db.getcomentario()
    .then(data => {        
      console.log(data)
      res.render('comentarios', { comentario: data });
  })
  .catch(err => {
      res.render('comentarios', { comentario: [] });
  })
});



module.exports = router;
