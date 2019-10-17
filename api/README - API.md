# Backend - REST API with Express.js in Node.js
npm run lint -- --fix
npm run start-dev

## Implementación de un servidor básico con express
npm install standard nodemon --save-dev
npm install express debug --save
npm install chalk --save 

## Integración con el módulo de base de datos
npm install -S ../db
npm install express-asyncify --save
npm install mysql

# Implementación de ruta del API
    Los middleware en express reciben tres parámetros que son el request, el response y next, lo que hace next es pasar el response al siguiente middleware para que siga el proceso de la petición hecha a la url o endpoint.

## Asegurando nuestra API con express-jwt
npm install jsonwebtoken --save
npm install express-jwt --save

$ node
> var auth = require('./auth')
> auth.sign({ username: 'root' }, 'event', console.log)
> auth.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJpYXQiOjE1NzA4NjM5MDN9.d6Tmc0B_U2hK5U7Xe0NXulW4Mq8kmlJfGhKDhQ8A5yc')


## Implementando permisos con express-jwt-permissions
npm install express-jwt-permissions --save

## CORS package
npm install --save cors