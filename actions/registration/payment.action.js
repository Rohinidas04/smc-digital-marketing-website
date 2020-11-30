import User from '../../models/user.model';

const payment = async (req, res) => {
  try {
    // console.log(req.body);
    const {
      cardFirstName,
      cardLastName,
      creditCardnumber,
      cardExpMonth,
      cardExpYear,
      cardCVV,
    } = req.body;

    await User.updateOne(
      { email: req.body.email },
      {
        cardFirstName,
        cardLastName,
        creditCardnumber,
        cardExpMonth,
        cardExpYear,
        cardCVV,
      }
    );

    return res.success();
  } catch (err) {
    return res.error(err.toString());
  }
};

export default payment;
