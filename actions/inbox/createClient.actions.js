import User from '../../models/user.model';

import Client from '../../models/client.model';

const createClient = async (req, res) => {
  try {
    if (!req.body.id) {
      return res.error({ error: 'missing user id in body json' });
    }

    // const user = await User.findOne({ email: req.body.email }).exec();

    const client = new Client();

    const response = await User.findByIdAndUpdate(req.body.id, {
      $push: { clientList: client._id },
    });

    if (response) {
      await client.save();
    } else {
      return res.error({ error: 'user email not existed' });
    }

    // const curClient = await user.clientList.findOne({ name: 'admin' });
    return res.success({
      clientID: client._id,
    });
  } catch (err) {
    return res.error({ error: `${err.toString()}` });
  }
};

export default createClient;
