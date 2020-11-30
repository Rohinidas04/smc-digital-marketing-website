import Client from '../../models/client.model';
import User from '../../models/user.model';

const checkBody = (req) => {
  if (!req.body.id) {
    throw Error('missing id');
  }
  if (!req.body.clientID) {
    throw Error('missing clientID');
  }

  if (!req.body.data) {
    throw Error('missing updated Data');
  }

  // cannt update note or message
  const { notes, messages } = req.body.data;
  if (notes) {
    throw Error('cant update notes');
  }
  if (messages) {
    throw Error('cant update messages');
  }
};

const updateClient = async (req, res) => {
  try {
    checkBody(req);
    const { id, clientID, data } = req.body;

    const { clientList } = await User.findById(id).select('clientList');

    if (clientList) {
      if (clientList.includes(clientID)) {
        const response = await Client.findOneAndUpdate(
          {
            _id: clientID,
          },
          data,
          { new: true }
        );
        res.success();
      } else {
        throw Error('clientID isnt corresponding to this user or no exit');
      }
    } else {
      throw Error('cant find this user');
    }
  } catch (err) {
    res.error({ error: err.message });
  }
};

export default updateClient;
