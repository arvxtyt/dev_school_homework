CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    first_name VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);

INSERT INTO users (username, email, first_name, password) VALUES ('sasha', 'sasha123@mail.com', 'sasha', 'qwerty123');
SELECT * FROM users;