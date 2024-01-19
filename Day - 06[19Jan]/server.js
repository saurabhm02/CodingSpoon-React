const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;
const dataFile = 'data.json';

const readData = () => {
  const rawData = fs.readFileSync(dataFile);
  return JSON.parse(rawData);
};

const writeData = (data) => {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
};

app.get("/", (req, res) => {
  const data = readData();
  res.json(data);
});

app.post("/addProduct", (req, res) => {
  const { title, price, rating, brand, category, imageUrl } = req.body;
  const data = readData();
  const id = (data.length + 1).toString(); 
  data.push({ id, title, price, rating, brand, category, imageUrl });
  writeData(data);
  res.json({ id, title, 
    price, rating, 
    brand, category, 
    imageUrl 
  });
});

app.put("/:id", (req, res) => {
  const data = readData();
  const id = req.params.id;
  const updateItems = req.body;
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    data[index] = { ...data[index], ...updateItems };
    writeData(data);
    res.json(data[index]);
  } else {
    res.status(404).send("Item Not Found");
  }
});

app.delete("/:id", (req, res) => {
  const data = readData();
  const id = req.params.id;
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    data.deleteItem = data.splice(index, 1)[0];
    writeData(data);  
    res.json(readData());
  } else {
    res.status(404).send("Item Not Found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
