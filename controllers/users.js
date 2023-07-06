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

const updateSubscription = async (req, res, next) => {
  const { _id: userId } = req.user;

  const result = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
  });

  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = {
  getCurrent,
  updateSubscription,
};
