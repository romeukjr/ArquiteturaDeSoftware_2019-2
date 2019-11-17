var express  = require('express');

//ROUTES FOR OUR API
// =============================================================================
module.exports = function (app) {
// create our router
var router = express.Router();

    // middleware to use for all requests
    router.use(function(req, res, next) {
        // do logging
        console.log('Something is happening.');
        next();
    });

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    router.get('/', function(req, res) {
        res.json({ message: 'GesFute API' });	
    });

    require('./Atleta/alimentoPlanoRoutes')(router);
    require('./Atleta/atletaRoutes')(router);
    require('./Atleta/avaliacaoDesempenhoRoutes')(router);
    require('./Atleta/avaliacaoMedicaRoutes')(router);
    require('./Atleta/planoAlimentarRoutes')(router);

    
    app.use('/api', router);
}