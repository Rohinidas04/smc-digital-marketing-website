import { auth } from '../firebase.config';
import User from '../models/user.model';

const isAuthenticated = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.error('Unauthorized');

  if (!authorization.startsWith('Bearer')) return res.error('Unauthorized');

  const split = authorization.split('Bearer ');
  if (split.length !== 2) return res.error('Unauthorized');

  const token = split[1];

  try {
    const decodedToken = await auth.verifyIdToken(token);

    console.log('Token is: ', token);
    console.log('decodedToken', JSON.stringify(decodedToken));

    const user = await User.findOne({ firebaseUid: decodedToken.uid });

    res.locals = {
      ...res.locals,
      // eslint-disable-next-line no-underscore-dangle
      id: user._id,
      uid: decodedToken.uid,
      role: decodedToken.role,
      email: decodedToken.email,
    };
    return next();
  } catch (err) {
    console.error(`${err.code} -  ${err.message}`);
    return res.error('Unauthorized');
  }
};

const isAuthorized = (opts) => {
  return (req, res, next) => {
    const { role, uid } = res.locals;
    const { id } = req.params;

    if (opts.allowSameUser && id && uid === id) return next();

    if (!role) return res.status(403).send();

    if (opts.hasRole.includes(role)) return next();

    return res.status(403).send();
  };
};

export { isAuthenticated, isAuthorized };
