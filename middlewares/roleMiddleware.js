const roleMiddleware = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ message: 'No autorizado' });
    }
    next();
  };
};

module.exports = roleMiddleware;