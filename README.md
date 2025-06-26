# API REST con Node.js, Express y MySQL

Esta es una API REST construida como examen práctico, utilizando **Node.js**, **Express**, **MySQL** y **Sequelize**, con autenticación por **JWT**, control de acceso por **roles** y un CRUD completo de tareas.

---

## 🔧 Tecnologías usadas

- Node.js
- Express
- Sequelize (ORM)
- MySQL
- JWT / Refresh Token
- Bcrypt (encriptación)
- Thunder Client (para pruebas)

---

## 📦 Instalación

//1. Clona el repositorio:
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO

// 2. Instala dependencias:
npm install

//3. Crea un archivo .env:
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=api_rest_examen
JWT_SECRET=supersecretjwt
JWT_REFRESH_SECRET=refreshsupersecret

//4. Crea la base de datos desde phpMyAdmin o MySQL Workbench:
CREATE DATABASE api_rest_examen;

//5. Inicia el servidor:
npx nodemon app.js

🔐 Autenticación
// Registro
POST /api/auth/register
{
  "username": "admin",
  "password": "123456",
  "role": "admin"
}

// Login
POST /api/auth/login
{
  "username": "admin",
  "password": "123456"
}
Devuelve accessToken y refreshToken.

// Renovar token
POST /api/auth/refresh
{
  "token": "refresh_token"
}