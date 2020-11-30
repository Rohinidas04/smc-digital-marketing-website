import twilio from 'twilio';
import env from '../../env';
import User from '../../models/user.model';

const TWILIO_ACCOUNT_SID = env('TWILIO_ACCOUNT_SID');
const TWILIO_AUTH_TOKEN = env('TWILIO_AUTH_TOKEN');
const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const details = async (req, res) => {
  try {
    // console.log(req.body);
    // save use database to check is all the data field avalibale
    const user = new User(req.body);
    await user.save();

    // create a sub account for this user
    await client.api.accounts.create({
      friendlyName: req.body.email,
    });

    return res.json({
      status: 'SUCCESS',
      message: 'add detail success',
      data: null,
    });
  } catch (err) {
    return res.json({
      status: 'FAIL',
      message: err.toString(),
      data: null,
    });
  }
};

export default details;
