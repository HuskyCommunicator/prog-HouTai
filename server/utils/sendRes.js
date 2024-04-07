const sendRes = (code, msg, data = null) => {
  const response = {
    code,
    msg,
  };
  if (data !== null) {
    response.data = data;
  }
  return response;
};
module.exports = sendRes;
