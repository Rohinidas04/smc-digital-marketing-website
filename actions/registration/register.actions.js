import admin from 'firebase-admin';
import firebase from 'firebase';

const register = async (req, res) => {
  const { username, password } = req.body;

  const user = await admin.auth().createUser({
    password,
    email: username,
    disabled: false,
  });

  const customToken = await admin.auth().createCustomToken(user.uid);

  const userToken = await firebase.auth().signInWithCustomToken(customToken);

  // console.log(userToken);

  return res.success({ token: userToken });
};

export default register;
