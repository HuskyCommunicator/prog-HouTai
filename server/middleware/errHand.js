const errHand = (req, res, next) => {
  res.cc = (err, status = 1) => {
    res.send({ status, message: err instanceof Error ? err.message : err });
  };
};
module.exports = errHand;
