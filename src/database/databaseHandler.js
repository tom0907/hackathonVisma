const { Pool, Client } = require("pg");

const credentials = {
    user: "postgres",
    host: "localhost",
    database: "vismatimeline",
    password: "postgres",
    port: 5432,
};

//Vrati vsetky eventy
async function getAllEvents() {
    const select = `
    SELECT * FROM timeline;
  `;
    return Pool.query(select);
}

//Vrati vsetky eventy s konkretnym tagom ktory je v parametri
async function getEventsByTag(tag) {
    const select = `
    SELECT * FROM timeline WHERE tag = $1;
  `;
    const values = [tag]
    return Pool.query(select, values);
}

//Prida event s udajmi v parametroch a vrati url ktoru by event mal mat
async function addEvent(title, tag, due_date, created_at){
    const insert = `
    INSERT INTO timeline(title, tag, due_date, created_at)
    VALUES ($1, $2, $3, $4)
    RETURNING id
  `;

    const values = [title, tag, due_date, created_at];
    let id = Pool.query(insert, values);
    return "localhost:8080/events/"+id;
}