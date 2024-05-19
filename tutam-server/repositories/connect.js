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

pool.connect().then(() => {
    console.log("Database connected");
});

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const result = await pool.query(`SELECT * FROM USERS WHERE username = $1 AND password = $2`, [username, password]);
    if (result.rows.length === 0) {
        res.status(401).send("Username or password is incorrect");
      } else {
        res.status(200).json(result.rows[0]);
      }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

async function signup(req, res) {
    const { username, email, password } = req.body;
    try {
        const result = await pool.query(`INSERT INTO USERS (username, email, password) VALUES($1, $2, $3) RETURNING *`,
            [username, email, password]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
  }

  async function getUserId(req, res) {
    const{id} = req.body;
    try{
        const result = await pool.query(`SELECT * FROM USERS WHERE id = $1`, [id]);
        res.status(200).json(result.rows[0]); 
    } catch(err){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
  }
  
  module.exports = {
    login,
    signup,
    getUserId
  };