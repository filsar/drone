const Fastify = require('fastify');
var { Client } = require('pg');
var fastify = Fastify({ logger: true });
fastify.register(require('fastify-sensible'));

//connessione al DB
async function getDbClient() {
    var client = new Client({
        user: 'esame',
        host: '127.0.0.1',
        database: 'calendario',
        password: 'Vmware1!',
        port: 5432,
    });
    client.connect();
    return client; //Apre la connessione
}

//avvia il server
async function Run(){
    try 
    {
        var port = 3000; //porta a scelta
        await fastify.listen(port);
        console.log(`Server listen on port ${port}`);
    }
    catch (error)
    {
            console.log('error', error);
    }
}
Run();

//GET
fastify.get('/events', async (req, res) => {
    var client = getDbClient(); //metodo che connette al db
    var query = await client.query("SELECT * FROM calendario;");
    client.end();
    if (query == undefined)
        res.code(404);
    else
        return query.rows; //ritorna il primo elemento dell'array
});

//GET id
fastify.get('/events/:id', async (req, res) => {
    var client = await getDbClient(); //metodo che connette al db
    var id = getPostId(req);
    var query = await client.query("SELECT * FROM calendario where id = $1;", [id]);
    client.end();
    if (query == undefined)
        res.code(404);
    else
        return query.rows; //ritorna il primo elemento dell'array
});

//POST
fastify.post('/events', async (req, res) => {
    var client = await getDbClient(); //metodo che connette al db
    var newPost = req.body;
    console.log(newPost);
    var query = await client.query("insert into calendario (title, startdate, endate, location) values ($1, $2, $3, $4) returning id;",[newPost.title, newPost.startDate, newPost.endDate, newPost.location]);
    
    var id = query.rows[0].id; //salva id restituito
    var last = await client.query("select * from calendario where id = $1", [id]);

    if(last == undefined) { //se non viene inserito
        throw fastify.httpErrors.InternalServerError();
    }
    res.code(201);
    client.end();
    return last.rows[0]; //ritorna il primo elemento dell'array
});

//DELETE
fastify.delete('/events/:id', async (req, res) => {
    var client = await getDbClient(); //metodo che connette al db
    var id = getPostId(req);
    var query = await client.query("delete from calendario where id = $1;", [id]);

    if (query == undefined)
        res.code(404);
    else
        client.end();
    
    res.code(204);
});

//PUT (modificare un ordine specifico)
fastify.put('/events/:id', async (req, res) => {
    var record2edit = req.body;
    var id = getPostId(req);
    var query = await client.query("update calendario set title = $2 where id = $1;", [id]);
    var query = await client.query("update calendario set title = $1, startdate = $2, enddate = $3, location = $4 where id = $1;", [record2edit.title, record2edit.startDate, record2edit.endDate, record2edit.location, id]);
    
    var index = events.findIndex(x => x.id == id);
    if(index < 0 ) {
        res.notFound();
        return;
    }
    
    record2edit.id = id;
    events[index] = record2edit;
    res.send(record2edit);
});

//gestire id numerici e non (parse stringa a numero)
function getPostId(req) {
    var id = parseInt(req.params.id, 10);
    if (isNan(id)) {
        throw fastify.httpErrors.badReques();
        //nel caso di: '/events/pippo'
    }
    return id;
};



