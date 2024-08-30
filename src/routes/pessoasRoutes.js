const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const router = Router();

router.get('/pessoas', (req, res) => pessoaController.getAll(req, res));
router.get('/pessoas/all', (req, res) =>pessoaController.pegaRegistrosPorEscopo(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.getByID(req, res));
router.put('/pessoas/:estudanteId/cancela', (req, res) => pessoaController.cancelaMatriculaPorEstudante(req, res));
router.post('/pessoas', (req, res) => pessoaController.createNew(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.updateRegister(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.delete(req, res));
router.get('/pessoas/:estudanteId/matriculas', (req, res) => pessoaController.pegaMatriculasAtivas(req, res));
router.get('/pessoas/:estudanteId/matriculas/all', (req, res) => pessoaController.pegaTodasMatriculas(req, res));
router.get('/pessoas/:estudanteId/matriculas/confirmadas', (req, res) =>matriculaController.pegaMatriculasPorEstudante(req, res));
router.get('/pessoas/matriculas/lotados', (req, res) =>matriculaController.pegaCursosLotados(req, res));
router.post('/pessoas/:estudanteId/matriculas', (req, res) => matriculaController.createNew(req, res));
router.put('/pessoas/:estudanteId/matriculas/:id', (req, res) =>matriculaController.updateRegister(req, res));
router.delete('/pessoas/:estudanteId/matriculas/:id', (req, res) => matriculaController.delete(req, res));


module.exports = router;
