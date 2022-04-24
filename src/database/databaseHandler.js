const { Pool, Client } = require("pg");

const credentials = {
    user: "postgres",
    host: "localhost",
    database: "vismatimeline",
    password: "postgres",
    port: 5432,
};

const pool = new Pool(credentials);
const client = new Client(credentials);

//Vrati vsetky eventy
export function getAllEvents() {
    const select = `
    SELECT * FROM timeline;
  `;
    return pool.query(select);
}

//Vrati vsetky eventy s konkretnym tagom ktory je v parametri
export function getEventsByTag(tag) {
    const select = `
    SELECT * FROM timeline WHERE tag = $1;
  `;
    const values = [tag];
    return pool.query(select, values);
}

//Prida event s udajmi v parametroch a vrati url ktoru by event mal mat
export function addEvent(title, tag, body_id, due_date){
    const insert = `
    INSERT INTO timeline(title, tag, body_id, due_date)
    VALUES ($1, $2, $3, $4)
    RETURNING id
  `;

    const values = [title, tag, due_date, created_at];
    let id = pool.query(insert, values);
    return "localhost:8080/events/"+id;
}

//Odstrani event
export function removeEvent(id) {
    const remove = `
    DELETE FROM timeline WHERE id = $1
  `;
    const values = [id];
    return pool.query(remove, values);
}

//Vrati posledny event ktory sa v blizkej dobe stal
export function getMostRecentEvent() {
    const select = `
    SELECT * FROM timeline WHERE timeline.due_date < $1
    ORDER BY timeline.date DESC LIMIT 1 

  `;
    const values = [new Date().toISOString().slice(0, 19).replace('T', ' ')];

    return pool.query(select, values);
}

//vrati ID posledneho eventu ktory sa stal
export function getMostRecentEventId() {
    const select = `
    SELECT id FROM timeline WHERE timeline.due_date < $1
    ORDER BY timeline.date DESC LIMIT 1 

  `;
    const values = [new Date().toISOString().slice(0, 19).replace('T', ' ')];

    return pool.query(select, values);
}

//nahraje obrazok do databazy ako base64 a vrati  jeho ID v danej databaze
export function uploadImage(file) {

    const insert = `
    INSERT INTO images(image)
    VALUES ($1)
    RETURNING id
  `;

    const values = [file];
    return pool.query(insert,values);
}

//na zaklade ID vrati objekt Image() [skonvertovany base64 na obrazok]
export function getImage(id) {

    const select = `
    SELECT image FROM images WHERE id = $1
  `;
    const values = [id];

    var image = new Image();
    image.src = pool.query(select, values);
    return image;

}

//vymaze obrazok z databazy na zaklade ID v parametri
export function removeImage(id) {
    const remove = `
    DELETE FROM images WHERE id = $1
  `;
    const values = [id];
    return pool.query(remove, values);
}

//nahraje do databazy clanok v textovej forme, funguje aj markdown
export function uploadArticle(file) {

    const insert = `
    INSERT INTO contents(body)
    VALUES ($1)
    RETURNING id
  `;

    const values = [file];
    return pool.query(insert,values);
}

//vrati telo konretneho artikla podla ID v parametri
export function getArticle(id) {

    const select = `
    SELECT body FROM contents WHERE id = $1
  `;
    const values = [id];

    return pool.query(select, values);

}

//vymaze artikel z databazy na zaklade ID poskytnuteho v parametri
export function removeArticle(id) {
    const remove = `
    DELETE FROM contents WHERE id = $1
  `;
    const values = [id];
    return pool.query(remove, values);
}