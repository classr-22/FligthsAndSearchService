const express = require('express');
const bodyparser = require('body-parser');

const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const setupAndStartServer = async ()=>{
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.use('/api', ApiRoutes);


    app.listen(PORT,()=>{
        console.log(`server is running on port : ${PORT}`); 
        
    });
}

setupAndStartServer();
