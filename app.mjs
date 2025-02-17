import express from 'express';
import { log } from 'node:console';

// crear instancia express
const app = express();

// configurar puerto
const PORT = 3000;

// ruta basica
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// ruta GET con parámetro de consulta
// solicitud: http:/localhost:3000/profile?edad=30
// app.get('/profile', (req, res) => {
//     const edad = req.query.edad;
    
//     console.log(`Edad recibida: ${edad}`);
//     res.send(`Edad del perfil: ${edad}`)
// })

// ruta GET para home
// solicitud: http:/localhost:3000/
// app.get('/', (req, res) => {
//     res.send('Página de inicio');
// });

// app.get('/data', (req, res) => {
//     res.send('Datos Recibidos')
// });

// ruta GET con parámetro de ruta
// solicitud: http:/localhost:3000/user/123
// app.get('/user/:id', (req, res) => {
//     const userID = req.params.id;
//     res.send(`Perfil del usuario con ID: ${userID}`);
// });

// ruta GET con múltiples parámetros
// solicitud: http:/localhost:3000/products/electronics/456
// app.get('/products/:category/:id', (req, res) => {
//     const { category, id } = req.params;
//     res.send(`Categoria: ${category}, ID del producto: ${id}`)
// });

// ruta GET con parámetro de consulta
// solicitud: http:/localhost:3000/search?q=javascript
// app.get('/search', (req, res) => {
//     const query = req.query.q;
//     res.send(`Resultados de busqueda para: ${query}`);
// });

// ruta GET con múltiples parámetros de consulta
// solicitud: http:/localhost:3000/filter?type=book&minPrice=10&maxPrice=50
// app.get('/search', (req, res) => {
//     const { type, minPrice, maxPrice } = req.query;
//     res.send(`Filtrar por tipo: ${query}, rango de precios: ${minPRice} - ${maxPrice}`);
// });

// iniciar sv
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
