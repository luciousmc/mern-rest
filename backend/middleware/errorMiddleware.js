const errorHandler = (err, req, res, next) => {
  const status = err.statusCode ? err.statusCode : 500;

  res.status(status).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};

module.exports = {
  errorHandler,
};
