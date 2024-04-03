// Create web server
// 1. Import express
const express = require('express');
// 2. Create an express application
const app = express();
// 3. Create a port
const port = 3000;
// 4. Create a route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the home page');
});
// 5. Create a route for the comments page
app.get('/comments', (req, res) => {
    res.send('Welcome to the comments page');
});
// 6. Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// 7. Open the browser and go to http://localhost:3000/comments
// 8. Go to http://localhost:3000/ and see the home page
// 9. Stop the server by pressing ctrl + c
// 10. Create a route for the about page
app.get('/about', (req, res) => {
    res.send('Welcome to the about page');
});
// 11. Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// 12. Go to http://localhost:3000/about
// 13. Create a route for the contact page
app.get('/contact', (req, res) => {
    res.send('Welcome to the contact page');
});
// 14. Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// 15. Go to http://localhost:3000/contact
// 16. Create a route for the services page
app.get('/services', (req, res) => {
    res.send('Welcome to the services page');
});
// 17. Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// 18. Go to http://localhost:3000/services
// 19. Create a route for the products page
app.get('/products', (req, res) => {
    res.send('Welcome to the products page');
});
// 20. Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// 21. Go to