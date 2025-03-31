require('dotenv').config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const cors = require('cors');
const signalRoutes = require('./routes/signalRoutes');
const activityRoutes = require("./routes/activityRoutes"); // Import route

const { changeSignal } = require('./controllers/signalController');


const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


app.use("/api/activity", activityRoutes); 
app.use('/api/signals', signalRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

io.on('connection', (socket) => {
  console.log(`🟢 Client Connected: ${socket.id}`);
  
  socket.on('disconnect', () => {
    console.log(`🔴 Client Disconnected: ${socket.id}`);
  });
});


setInterval(() => changeSignal(io), 5000);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
