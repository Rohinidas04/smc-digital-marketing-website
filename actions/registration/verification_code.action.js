import telnyx from 'telnyx';
import env from '../../env';
import PhoneVerification from '../../models/phoneVerification.models';

const TELNYX_API_KEY = env('TELNYX_API_KEY');
const TELNYX_PHONE = env('TELNYX_PHONE');
const client = telnyx(TELNYX_API_KEY);

const verificationCode = (req, res) => {
  const { phoneNumber } = req.body;
  // generate 6 digit code
  const code = Math.floor(100000 + Math.random() * 900000);
  // missing save phone,code and time stamp
  const data = { phoneNumber, code };

  const user = new PhoneVerification(data);
  // async is not wokring with pre save
  user.save().then();

  // sending out message
  (async () => {
    try {
      await client.messages.create({
        from: TELNYX_PHONE,
        to: `+${phoneNumber}`,
        text: `${code} is your verification code!`,
      });
      return res.success();
    } catch (err) {
      return res.error('fail');
    }
  })();
};

export default verificationCode;
