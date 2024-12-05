import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("gallery.db");

export const initDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filePath TEXT NOT NULL,
        latitude REAL,
        longitude REAL,
        timestamp TEXT
      );`
    );
  });
};

export const addImage = (image, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      `INSERT INTO images (filePath, latitude, longitude, timestamp) VALUES (?, ?, ?, ?);`,
      [image.filePath, image.latitude, image.longitude, image.timestamp],
      (_, result) => callback(result),
      (_, error) => console.log(error)
    );
  });
};

export const fetchImages = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      `SELECT * FROM images;`,
      [],
      (_, result) => callback(result.rows._array),
      (_, error) => console.log(error)
    );
  });
};
