const Services = require('./Services.js');

class PessoaServices extends Services {
  constructor() {
    super('Pessoa');
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
}

module.exports = PessoaServices;
