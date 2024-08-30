const dataSource = require('../database/models');
const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
    this.matriculaServices = new Services('Matricula');
  }
  async getMatriculasPorEstudantes(id) {
    const estudante = await super.getARegisterByID(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }
  async getMatriculas(id) {
    const estudante = await super.getARegisterByID(id);
    const listaMatriculas = await estudante.getTodasAsMatriculas();
    return listaMatriculas;
  }
  async getRegisterAll(escopo) {
    const listaPessoas = await super.getAllRegisterByScope(escopo);
    return listaPessoas;
  }
  async cancelaPessoaMatriculada(estudanteId) {
    return dataSource.sequelize.transaction(async (transacao) => {
      await super.updateARegister(
        { ativo: false },
        { id: estudanteId },
        transacao
      );
      await this.matriculaServices.updateARegister(
        { status: 'cancelado' },
        { estudante_Id: estudanteId },
        transacao
      );
    });
  }
}

module.exports = PessoaServices;
