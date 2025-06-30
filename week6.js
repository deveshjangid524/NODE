import express from 'express';
const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// In-memory data for menu and orders
let menu = [
  { id: 1, name: "Pizza", price: 12.99 },
  { id: 2, name: "Burger", price: 8.99 }
];

let orders = [];

// Get all menu items
app.get('/api/menu', (req, res) => {
  res.json(menu);
});

// Add a new menu item
app.post('/api/menu', (req, res) => {
  const { name, price } = req.body;
  const newItem = {
    id: menu.length + 1,
    name,
    price
  };
  menu.push(newItem);
  res.status(201).json(newItem);
});

// Update an existing menu item
app.put('/api/menu/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = menu.find(m => m.id === id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  item.name = req.body.name || item.name;
  item.price = req.body.price || item.price;

  res.json(item);
});

// Delete a menu item
app.delete('/api/menu/:id', (req, res) => {
  const id = parseInt(req.params.id);
  menu = menu.filter(m => m.id !== id);
  res.status(204).send();
});

// Place a new order
app.post('/api/orders', (req, res) => {
  const { items } = req.body; // items = array of menu item IDs
  const orderedItems = menu.filter(m => items.includes(m.id));
  const total = orderedItems.reduce((sum, item) => sum + item.price, 0);

  const newOrder = {
    id: orders.length + 1,
    items: orderedItems,
    total
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Get all orders
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
