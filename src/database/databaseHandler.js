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

async function removeEvent(id) {
    const remove = `
    DELETE FROM timeline WHERE id = $1
  `;
    const values = [id];
    return Pool.query(remove, values);
}

async function getMostRecentEvent() {
    const select = `
    SELECT * FROM timeline WHERE timeline.due_date < $1
    ORDER BY timeline.date DESC LIMIT 1 

  `;
    const values = [new Date().toISOString().slice(0, 19).replace('T', ' ')]

    return Pool.query(select, values);
}

async function getMostRecentEventId() {
    const select = `
    SELECT id FROM timeline WHERE timeline.due_date < $1
    ORDER BY timeline.date DESC LIMIT 1 

  `;
    const values = [new Date().toISOString().slice(0, 19).replace('T', ' ')]

    return Pool.query(select, values);
}