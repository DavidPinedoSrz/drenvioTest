.[!NOTE] Prueba Técnica: React + Node.js + MongoDB

## Introducción

Este proyecto es una prueba técnica que tiene como objetivo evaluar conocimientos y habilidades en el desarrollo de aplicaciones web utilizando **React** como frontend, **Node.js** como backend y **MongoDB** como base de datos. La aplicación permite a los usuarios ver una lista de productos y asignar precios especiales a estos productos según su ID de usuario.

## Pasos para Ejecutar Localmente

.[!IMPORTANT] Requisitos Previos

- **Node.js**: Asegúrate de tener Node.js instalado en tu sistema.
- **MongoDB**: Necesitas una instancia de MongoDB. Puedes usar MongoDB Atlas o instalar MongoDB localmente.

.[!TIP] Instalación

1. **Clonar el Repositorio**:
   git clone https://github.com/DavidPinedoSrz/drenvioTest.git
   cd drenvioTest

2. **Instalar Dependencias del Backend:**:
   cd backend
   npm init

3. **Instalar Dependencias del Frontend:**:
   cd ../frontend
   npm install

4. **Configurar Variables de Entorno:**:
   En la carpeta backend, crea un archivo .env y agrega la siguiente variable:
   MONGO_URI=mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/tienda

5. **Ejecutar el Backend:**:
   cd ../backend
   node server.js

6. **Ejecutar el Frontend:**:
   cd ../frontend
   npm run dev
