import express from 'express';

const responseObject = Object.create(express().response, {
  success: {
    value: (data) => {
      return this.json({
        status: 'success',
        data,
      });
    },
  },
});

const responseExtension = (req, res, next) => {
  res.success = (test) => {
    return res.json({ valid: test });
  };

  next();
};

export default responseExtension;
