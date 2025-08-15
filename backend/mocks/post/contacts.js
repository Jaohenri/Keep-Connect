export default (req, res) => {
  if (!global.mockadinDataStore) {
    global.mockadinDataStore = new Map();
  }
  const records = global.mockadinDataStore.get('contacts') || [];
  
  const newRecord = {
    id: records.length > 0 ? Math.max(...records.map(r => r.id)) + 1 : 1,
    ...req.body,
    createdAt: new Date().toISOString()
  };
  
  records.push(newRecord);
  global.mockadinDataStore.set('contacts', records);
  
  res.status(201).json(newRecord);
};