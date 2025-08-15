export default (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({
    message: `User created: ${name} (${email})`,
    id: Math.floor(Math.random() * 10000),
    timestamp: new Date().toISOString(),
  });
};