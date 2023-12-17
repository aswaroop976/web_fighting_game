CREATE DATABASE GameDB;
USE GameDB;

DROP TABLE IF EXISTS players
CREATE TABLE players (
    userID INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, 
    email VARCHAR(100) NOT NULL UNIQUE,
    is_online BOOLEAN DEFAULT FALSE
);

DROP TABLE IF EXISTS friends_list
CREATE TABLE friends_list (
    friendID1 INT,
    friendID2 INT,
    FOREIGN KEY (friendID1) REFERENCES players(userID),
    FOREIGN KEY (friendID2) REFERENCES players(userID),
    PRIMARY KEY (friendID1, friendID2)
);
