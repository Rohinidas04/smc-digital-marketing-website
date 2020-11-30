import { Types } from 'mongoose';
import Client from '../../models/client.model';

const getMessages = async (req, res) => {
  try {
    if (!req.query.id) {
      return res.error('missing id');
    }

    // if the date provided, it will get the 100 message before the date,
    // else date wil be set to now.
    const date = req.query.date ? new Date(req.query.date) : new Date();

    const response = await Client.aggregate([
      {
        $match: {
          _id: Types.ObjectId(req.query.id),
        },
      },
      { $unwind: '$messages' },
      { $project: { messages: 1 } },
      {
        $match: {
          'messages.date': { $lt: date },
        },
      },
      { $limit: 100 },
      { $sort: { 'messages.date': 1 } },
      { $group: { _id: '$_id', messages: { $push: '$messages' } } },
    ]);

    if (response.length === 0) {
      return res.success([]);
    }

    return res.success(response[0].messages);
  } catch (err) {
    console.log(err);
    return res.error(err.message);
  }
};

export default getMessages;
