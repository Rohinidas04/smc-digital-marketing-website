const responseMiddleware = (req, res, next) => {
  res.success = (message, data) => {
    return res.status(200).json({
      status: 'success',
      message,
      data,
    });
  };

  res.error = (message, data) => {
    return res.status(400).json({
      status: 'error',
      message,
      data,
    });
  };

  res.warning = (message, data) => {
    return res.status(400).json({
      status: 'warning',
      message,
      data,
    });
  };

  next();
};

export default responseMiddleware;
