CREATE TABLE timeline (
    id SERIAL,
    title TEXT,
    tag TEXT,
    body_id INTEGER,
    due_date DATE,
    created_at TIMESTAMP
                      );

CREATE TABLE images (
    id SERIAL,
    image TEXT
);

CREATE TABLE contents (
    id SERIAL,
    body TEXT
);

