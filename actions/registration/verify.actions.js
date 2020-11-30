import PhoneVerification from '../../models/phoneVerification.models';

const verify = async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    const docs = await PhoneVerification.findOne(
      { phoneNumber },
      { phoneNumber: 1, code: 1 }
    );

    if (docs != null) {
      if (req.body.code === docs.code) {
        return res.success({ match: true });
      }
    }
    return res.error('code dont match or resend a new code');
  } catch (err) {
    return res.error(err.toString());
  }
};

export default verify;
