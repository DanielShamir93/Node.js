const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// app.use(express.json());

// app.get('^/$', (req, res) => {
//    res.send("Hello World!");

//    res.sendFile("./views/index.html", {root: __dirname}); 
//    or
//    res.sendFile(path.join(__dirname, 'views', index.html)); 

//    res.redirect(301, "/page.html");  // 302 default
// })

// app.all('*', (req, res) => {
//    res.status(404);
//    if (req.accepts('html')) {
//      res.sendFile(path.join(__dirname, 'views', '404.html'))
//    } else if (req.accepts('json')) {
//      res.json({error: "404 Not Found"})
//    } else {
//      res.type('txt').send("404 Not Found");
//    }
// })


// route chaining

// const one = (req, res, next) => {
//   console.log("function one")
//    next();
// }

// const two = (req, res) => {
//   res.send("chaining done")
// }

// app.get('/hello(.html)?'}, [one, two]);



// app.use((err, req, res, next) => {
//    console.error(err.stack);
//    res.status(500).send(err.message);
// }


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));