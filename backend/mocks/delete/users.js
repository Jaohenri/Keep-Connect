export default (req, res) => {
  const { id } = req.body;
  res.json({
    message: `User deleted: ${id}`,
    timestamp: new Date().toISOString(),
  });
};