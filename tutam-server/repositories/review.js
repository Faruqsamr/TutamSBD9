const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    
    ssl: {
        require: true,
    },
});

async function createReview(req, res) {
    try {
        const{userid, name, kamar, review, rating, resources} = req.body;
        const result = await pool.query(
            `INSERT INTO Kost (userid, name, kamar, review, rating, resources)
            VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
            [userid, name, kamar, review, rating, resources]
        );
        res.status(201).send(result.rows);
    } catch (error) {
      res.status(500).send({
        err: error,
      });
    }
};

async function readReview(req, res) {
    try {
      const result = await pool.query(
        `SELECT Kost.*, Users.username FROM Kost 
        INNER JOIN Users ON Kost.userid = Users.id;`
      );
  
      if (!result) {
        res.status(404).send("No review found");
      } else {
        res.send(result.rows);
      }
    } catch (error) {
      res.status(500).send({
        err: error,
      });
    }
};

async function updateReview(req, res) {
    try {
        const{id} = req.params;
        const{review, rating} = req.body;
        const result = await pool.query(
            `UPDATE Kost
            SET review = $1, rating = $2
            WHERE id = $3 RETURNING *`,
            [review, rating, id]
        );
        res.status(201).send(result.rows);
    } catch (error) {
      res.status(500).send({
        err: error,
      });
    }
};

async function deleteReview(req, res) {
    try {
        const{id} = req.body;
        const result = await pool.query(
            `DELETE FROM Kost WHERE id = $1 RETURNING *`,
            [id]
        );
        res.status(201).send(result.rows);
    } catch (error) {
      res.status(500).send({
        err: error,
      });
    }
};

module.exports = {
    createReview,
    readReview,
    updateReview,
    deleteReview
}