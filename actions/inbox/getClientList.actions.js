import User from '../../models/user.model';

const getClientList = async (req, res) => {
  try {
    if (!req.query.id) {
      return res.error('missing id');
    }

    const { clientList } = await User.findById(req.query.id)
      .populate('clientList', '-messages')
      .select('clientList');

    // const curClient = await user.clientList.findOne({ name: 'admin' });

    return res.success(clientList);
  } catch (err) {
    return res.error(err.message);
  }
};

export default getClientList;
