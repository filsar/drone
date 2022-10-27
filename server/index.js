var restify = require('restify');

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

server.get('/drones', function(req, res, next) {
    res.send('List of drones: [TODO]');
    return next();
});

server.get('/drones/:id', function(req, res, next) {
    res.send('Current values for drone ' + req.params['id'] + ': ' + res.body);
    return next();
});

server.post('/drones/:id', function(req, res, next) {
    res.send('Data received from drone [TODO]');

    console.log(req.body);

    return next();
});


//ricezione singolo dati (posizione)
server.put('/drones/:id/status/speed', function(req, res, next) {

});

//ricezione pacchetto dati (posizione, velocità, ...)
server.put('/drones/:id/status', function(req, res, next) {

});

server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});
