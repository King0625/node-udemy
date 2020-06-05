const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFoundController = require('./controllers/notFound')
// app.use((req,res,next) => {
// 	console.log('In the middleware');
// 	next(); // Allow the request to continue to the next middleware in line
// });

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.set('view engine', 'pug');
// app.set('views', 'views');

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(shopRoutes);


app.use(notFoundController.notFound);



// const server = http.createServer(app);
// server.listen(8591);
app.listen(8591);