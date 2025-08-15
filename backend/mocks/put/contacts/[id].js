export default (req, res) => {
  if (!global.mockadinDataStore) {
    global.mockadinDataStore = new Map();
  }
  const records = global.mockadinDataStore.get('contacts') || [];
  const id = parseInt(req.params.id);
  const recordIndex = records.findIndex(r => r.id === id);
  
  if (recordIndex === -1) {
    return res.status(404).json({ error: 'Record not found' });
  }
  
  const updatedRecord = {
    ...records[recordIndex],
    ...req.body,
    id, // Ensure ID doesn't change
    updatedAt: new Date().toISOString()
  };
  
  records[recordIndex] = updatedRecord;
  global.mockadinDataStore.set('contacts', records);
  
  res.json(updatedRecord);
};