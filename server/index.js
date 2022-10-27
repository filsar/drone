var restify = require('restify');
var { Client } = require('pg');

var server = restify.createServer();
server.use(restify.plugins.bodyParser());

//connessione al DB
async function getDbClient() {
    var client = new Client({
        user: 'drone',
        host: '127.0.0.1',
        database: 'drone',
        password: 'Vmware1!',
        port: 5432,
    });
    client.connect();
    return client; //Apre la connessione
}

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

    var id = req.params.id;
    console.log(id);
    console.log(JSON.parse(req.body));
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
