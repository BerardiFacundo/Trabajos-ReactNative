# Proyecto de Login con React Native y PHP

Este proyecto es una aplicación de inicio de sesión (login) en **React Native** que se conecta a un backend en **PHP** con una base de datos **MySQL** para autenticar a los usuarios.

## Requisitos

- **XAMPP** o **WAMP** para el servidor PHP y MySQL.
- **Node.js** y **npm** para ejecutar el proyecto de React Native.
- **React Native CLI** o **Expo CLI** (en este caso usamos Expo para facilitar la configuración).

## Pasos de Configuración

### 1. Clonar el Proyecto

Primero, clona el repositorio o descarga el código a tu máquina local:

```bash
git clone "y toda la url"
cd nombre del proyecto
```
### 2. Instalar Dependencias

Instala las dependencias del proyecto de React Native usando npm:
npm install

### 3. Configurar la Base de Datos MySQL

A continuación, crearemos una base de datos en MySQL para almacenar la información de los usuarios.
Abre XAMPP o WAMP y asegúrate de que MySQL y Apache están ejecutándose.
Abre phpMyAdmin (normalmente está en http://localhost/phpmyadmin).
Crea una nueva base de datos llamada authDB.

```bash
CREATE DATABASE authDB;
USE authDB;
```

### 4. Dentro de authDB, crea una tabla users con el siguiente comando SQL:

```bash
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
```
### 5. Para añadir un usuario de prueba, ejecuta este comando SQL (reemplaza password123 por la contraseña deseada.

```bash
INSERT INTO users (username, email, password) VALUES ('testuser', 'testuser@example.com', PASSWORD('password123'));
```

### 6. Colocar el Archivo PHP (API)
El archivo login.php es el endpoint que manejará la autenticación de usuarios. Asegúrate de que se encuentra en la carpeta correcta para que el servidor Apache pueda acceder a él.

Copia el archivo login.php en el directorio de documentos públicos de tu servidor:

Para XAMPP: Coloca login.php en la carpeta htdocs. La ruta debe ser algo como C:\xampp\htdocs\login.php.
Para WAMP: Coloca login.php en la carpeta www. La ruta debe ser algo como C:\wamp\www\login.php.
Prueba de conexión: Abre un navegador y accede a http://localhost/login.php. Si ves un mensaje de error de "Invalid request method" (debido a que no has enviado una solicitud POST), significa que el archivo PHP está accesible.

### 7. Configurar la IP del Servidor en el Código de React Native

Si estás ejecutando la aplicación en un emulador o en un dispositivo móvil, necesitas configurar la IP local de tu máquina en el archivo auth.js para que el dispositivo pueda acceder a la API.

### 8. Encuentra la IP local de tu máquina:

En Windows, abre el símbolo del sistema y escribe ipconfig. Busca la IP de tu red local (normalmente comienza con 192.168.x.x).
En macOS/Linux, abre la terminal y usa ifconfig para encontrar tu IP local.
Abre el archivo src/api/auth.js en el proyecto de React Native y reemplaza http://localhost/login.php con http://[TuIpLocal]/login.php, por ejemplo:

```bash
const response = await axios.post('http://192.168.1.10/login.php', {
    email: email,
    password: password,
});
```

### 9. Ejecutar la Aplicación
Ahora que todo está configurado, puedes ejecutar la aplicación de React Native.

Para iniciar la aplicación en Expo:

npx expo start
