export default {
  async findAll(req, res) {
    return res.json({ message: 'Find All' });
  },
  async create(req, res) {
    return res.json({ message: 'Create' });
  }
};
