const { options } = require("../routes/estudianteRoutes");

class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findById(id, options = {}) {
    return await this.model.findByPk(id, options);
  }

  async create(data, options = {}) {
    return await this.model.create(data, options);
  }

  async update(id, data) {
    const item = await this.model.findByPk(id, options);
    if (!item) return null;
    return await item.update(data);
  }

  async delete(id) {
    const item = await this.model.findByPk(id, options);
    if (!item) return null;
    await item.destroy();
    return true;
  }
}

module.exports = BaseRepository;
