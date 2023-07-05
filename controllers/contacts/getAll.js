const { Contact } = require('../../models/contact');

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  // Get Request Params for pagination
  const { page = 1, limit = 20, favorite = '' } = req.query;

  const skip = (page - 1) * limit;
  const contacts = !favorite
    ? await Contact.find({ owner }, '-createAt -updateAt', {
        skip,
        limit,
      }).populate('owner', 'name email')
    : await Contact.find({ owner, favorite: true }, '-createAt -updateAt', {
        skip,
        limit,
      }).populate('owner', 'name email');

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getAll;
