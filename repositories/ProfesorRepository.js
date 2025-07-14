const BaseRepository = require('./BaseRepository.js');

class ProfesorRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }
}

module.exports = ProfesorRepository;