const Sequelize = require('sequelize');
const Controller = require('./Controller.js');
const MatriculaServices = require('../services/MatriculaServices.js');

const matriculaServices = new MatriculaServices();

class MatriculaController extends Controller {
  constructor() {
    super(matriculaServices);
  }
  async pegaMatriculasPorEstudante(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await matriculaServices.pegaRegistrosEConta({
        where: { estudante_Id: Number(estudanteId), status: 'matriculado' },
        order: [['id', 'ASC']],
      });
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  async pegaCursosLotados(req, res) {
    const lotacaoCursos = 2;
    try {
      const listaMatriculas = await matriculaServices.pegaRegistrosEConta({
        where: { status: 'matriculado' },
        attributes: ['curso_id'],
        group: ['curso_id'],
        having: Sequelize.literal(`count(curso_id) >= ${lotacaoCursos}`),
      });
      return res.status(200).json(listaMatriculas.count);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = MatriculaController;
