const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');
const cursoController = new CursoController();

const router = Router();

router.get('/cursos', (req, res) => cursoController.getAll(req, res));
router.get('/cursos/:id', (req, res) => cursoController.getByID(req, res));
router.post('/cursos', (req, res) => cursoController.createNew(req, res));
router.put('/cursos/:id', (req, res) =>
  cursoController.updateRegister(req, res)
);
router.delete('/cursos/:id', (req, res) => cursoController.delete(req, res));

module.exports = router;
