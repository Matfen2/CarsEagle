const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Matfen',
    password: 'Geralt2077!',
    database: 'cars'
});

db.connect((error) => {
    if (error) {
        console.log('Erreur de la connection de la base de données');
    } else {
        console.log('Succès de la connection de la base de données');
    }
});

app.listen(PORT, () => {
    console.log('Connection au port serveur ' + PORT);
})

// LOG IN
app.post("/login", (req, res) => {
  let address = req.body.adress;
  let password = req.body.pass;

  let query = `SELECT * FROM user WHERE adress = ? AND pass = ?`;

  db.query(query, [address, password], (error, results) => {
    if (!error) {
      if (results.length > 0) {
        return res.status(200).send({ message: "Connexion réussie" });
      } else {
        return res
          .status(401)
          .json({ message: "Adresse ou mot de passe incorrect." });
      }
    } else {
      return res.status(500).send({ message: "Erreur interne du serveur" });
    }
  });
});

// REGISTER
app.post("/signup", (req, res) => {
  let user = req.body;
  let query = `SELECT pseudo, adress, phone, pass FROM user WHERE adress = ?`;

  db.query(query, [user.adress], (error, results) => {
    if (!error) {
      if (results.length <= 0) {
        let qr = `INSERT INTO user (pseudo, adress, phone, pass) VALUES (?, ?, ?, ?)`;
        db.query(
          qr,
          [user.pseudo, user.adress, user.phone, user.pass],
          (error, results) => {
            if (!error) {
              return res.status(200).send({ message: "Enregistrement réussi" });
            } else {
              console.error(error);
              return res
                .status(500)
                .send({ message: "Echec de l'enregistrement" });
            }
          }
        );
      } else {
        return res.status(400).json({ message: "Compte déjà existant." });
      }
    } else {
      return res.status(400).json({ message: error });
    }
  });
});