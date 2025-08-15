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
  
  const deletedRecord = records.splice(recordIndex, 1)[0];
  global.mockadinDataStore.set('contacts', records);
  
  res.json({ message: 'Record deleted successfully', deletedRecord });
};