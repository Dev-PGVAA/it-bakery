CREATE TABLE person(
	id SERIAL PRIMARY KEY,
	email VARCHAR(255),
	login VARCHAR(255),
	password VARCHAR(255)
);

CREATE TABLE cart(
	id SERIAL PRIMARY KEY,
	title VARCHAR(255),
	user_id INTEGER,
	FOREIGN KEY (user_id) REFERENCES person (id)
)