const BaseRepository = require('./BaseRepository.js');

class MateriaRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
}

module.exports = MateriaRepository;