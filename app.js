require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

// Modelos
require('./models/User');
require('./models/Task');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Sincronizar modelos y arrancar el servidor
sequelize.sync({ alter: true }) // o { force: true } para reiniciar estructura
  .then(() => {
    console.log('📦 Base de datos conectada y sincronizada');
    app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
  })
  .catch(err => console.error('❌ Error al conectar DB:', err));


const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);
