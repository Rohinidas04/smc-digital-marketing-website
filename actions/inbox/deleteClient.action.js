import User from '../../models/user.model';

import Client from '../../models/client.model';

const checkBody = (req) => {
  if (!req.query.id) {
    throw Error('missing id');
  }
  if (!req.query.clientID) {
    throw Error('missing clientID');
  }
};

const deleteClient = async (req, res) => {
  try {
    checkBody(req);
    const { id, clientID } = req.query;

    await User.findByIdAndUpdate(id, {
      $pull: { clientList: clientID },
    });

    await Client.findByIdAndDelete(req.body.clientID);

    return res.success();
  } catch (err) {
    return res.error({ error: err.message });
  }
};

export default deleteClient;
