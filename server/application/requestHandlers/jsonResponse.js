const jsonResponse = res => item => {
  res.jsonp(item);
};

module.exports = jsonResponse;
