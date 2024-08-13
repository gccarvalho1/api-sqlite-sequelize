class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAll(req, res) {
    try {
      const listaDeRegistro = await this.entidadeService.getAllRegistros();
      return res.status(200).json(listaDeRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  async getByID(req, res) {
    const { id } = req.params;
    try {
      const filtroPorID = await this.entidadeService.getARegisterByID(
        Number(id)
      );
      return res.status(200).json(filtroPorID);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  async createNew(req, res) {
    const dadosParaCriar = req.body;
    try {
      const novoRegistro = await this.entidadeService.createARegister(
        dadosParaCriar
      );
      return res.status(200).json(novoRegistro);
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  async updateRegister(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const foiAtualizado = await this.entidadeService.updateARegister(
        dadosAtualizados,
        Number(id)
      );
      if (!foiAtualizado) {
        return res
          .status(400)
          .json({ message: 'Registro não foi atualizado!' });
      }
      return res.status(200).send('Registro atualizado com sucesso!');
    } catch (erro) {
      return res.status(500).json({ erro: erro.message });
    }
  }
  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.deleteRegister(Number(id));
      return res.status(200).json({ mensagem: `${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
module.exports = Controller;
