var {Client} = require('pg')

function GetDbClient(){
    var client = new Client({
        user: 'drone',
        host: 'localhost',
        database: 'drone',
        password: 'Vmware1!',
        port: 5432,
    });
    client.connect();
    return client;
}

async function GetAllDrones(){
    var client = getDbClient();
    var result = await client.query("SELECT * FROM droni;");
    client.end();
    return result.rows;
}

async function GetDrone(id) {
    var client = GetDbClient();
    var result = await client.query("SELECT * FROM droni WHERE id = $1", [id]);
    client.end();
    return result.rows[0];

}

async function InsertValue(newValue) {
    var client = getDbClient();
    var insert = await client.query("INSER INTO rilevazioni (id_drone, id_stato, valore, data_rilevazione) VALUES ($1, $2, $3, $4) RETURNING id;",
                                    [newValue.Id, newValue.Name, newValue.Value, newValue.Date]);
    
    //verifico se è avvenuto correttamente l'inserimento
    var id = insert.rows[0].id;
    var last = await client.query("SELECT * FROM rilevazioni WHERE id = $1", [id])
    client.end();
    return last.rows[0];
}

module.exports = {GetAllDrones, GetDrone, InsertValue};