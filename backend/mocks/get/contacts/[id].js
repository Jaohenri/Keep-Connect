export default (req, res) => {
  if (!global.mockadinDataStore) {
    global.mockadinDataStore = new Map();
  }
  const records = global.mockadinDataStore.get('contacts') || [];
  const id = parseInt(req.params.id);
  const record = records.find(r => r.id === id);
  
  if (!record) {
    return res.status(404).json({ error: 'Record not found' });
  }
  
  res.json(record);
};