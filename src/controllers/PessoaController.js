const Controller = require('./Controller.js');
const PessoaServices = require('../services/PessoaServices.js');

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculasAtivas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.getMatriculasPorEstudantes(
        Number(estudanteId)
      );
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  async pegaTodasMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const listaMatriculas = await pessoaServices.getMatriculas(
        Number(estudanteId)
      );
      return res.status(200).json(listaMatriculas);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  async pegaRegistrosPorEscopo(req, res) {
    try {
      const listaPessoasPorEscopo = await pessoaServices.getRegisterAll(
        'todosOsRegistros'
      );
      return res.status(200).json(listaPessoasPorEscopo);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  async cancelaMatriculaPorEstudante(req, res) {
    const { estudanteId } = req.params;
    try {
      await pessoaServices.cancelaPessoaMatriculada(Number(estudanteId));
      return res
        .status(200)
        .json({ message: `A ref. estudante ${estudanteId} foi cancelada` });
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = PessoaController;
