export default (req, res) => {
  const { id, name, email } = req.body;
  res.json({
    message: `User updated: ${id} - ${name} (${email})`,
    timestamp: new Date().toISOString(),
  });
};