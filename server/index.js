var restify = require('restify');
db = require('../Server/connection');

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

function getPostId(req) {
    var id = parseInt(req.params.id, 10);

    // utilizzo questa funzione per verificare che l'id della richiesta sia effettivamente un numero
    //if(isNaN(id)) {
    //  throw fastify.httpErrors.badRequest();
    //}
    return id;
}

server.get('/drones', function(req, res, next) {
    res.send('List of drones: [TODO]');
    return next();
});

server.get('/drones/:id', function(req, res, next) {
    res.send('Current values for drone ' + req.params['id'] + ': ');
    return next();
});

server.post('/drones/:id/status', function(req, res, next) {
    res.send('Data received from drone [TODO]');

    var Id = getPostId(req);
    value = JSON.parse(req.body);

    if(Array.isArray(value)) { //se value è un array
        value.forEach((v) => { //per ogni elemento dell'array
            var newValue = {Id, ...v} //creo un nuovo value con...
            db.InsertValue(newValue);   //inserisco il valore nel db
        });
    }
    else {
        var newValue = {Id, ...value} //altrimenti se non è un array
        db.InsertValue(newValue);
    }

    console.log(req.body);

    return next();
});

server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});
