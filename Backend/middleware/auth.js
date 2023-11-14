const auth = (req, res, next) => {
  const isEmailAvailable = req.headers.authorization;

  if (!isEmailAvailable) {
    res.send("Please Enter your email");
  } else {
    next();
  }
};

export { auth };
