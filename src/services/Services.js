const dataSource = require('../database/models/index.js');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async getAllRegistros() {
    return dataSource[this.model].findAll();
  }
  async getAllRegisterByScope(escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  }
  async getARegisterByID(id) {
    return dataSource[this.model].findByPk(id);
  }
  async createARegister(dadosParaCriar) {
    return dataSource[this.model].create(dadosParaCriar);
  }
  async updateARegister(dadosAtualizados, id) {
    const listadeRegistrosAtualizados = dataSource[this.model].update(
      dadosAtualizados,
      {
        where: { id: id },
      }
    );
    console.log(listadeRegistrosAtualizados);
    if (listadeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }
  async deleteRegister(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
