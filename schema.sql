CREATE DATABASE notes_storage;
Use notes_storage;
CREATE TABLE notes(
    id INTEGER PRIMARY KEY  AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    time TIMESTAMP NOT NULL DEFAULT NOW()
);
INSERT INTO notes (title, content) VALUES
('note 1','lorem ipsum texte somethig etc');
