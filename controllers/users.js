const { User } = require('../models/user');

const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;

  res.json({
    Status: 'ok',
    ResponseBody: {
      email,
      subscription,
    },
  });
};

module.exports = {
  getCurrent,
};
