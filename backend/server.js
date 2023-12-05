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
    console.log('Conection au port serveur ' + PORT);
})

// LOG IN VERIFY DATA
app.post('/connect', (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;

    let qr = `slect * from connect where user = ? and pass = ?`;

    db.query(qr, [user, pass], (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).send({message: 'Internal server error'});
        }
        if (result.length>0) {
            res.send({
                message: "Connexion réussie"
            })
        } else {
            res.send({
              message: "Connexion invalide",
            });
        }
    })
})

// SIGN UP DATA
app.post("/connect", (req, res) => {
  const user = req.body.user;
  const adress = req.body.adress;
  const phone = req.body.phone;
  const pass = req.body.pass;

  let qr = `insert into connect (user, adress, phone, pass) values (?, ?, ?, ?)`;

  db.query(qr, [user, adress, phone,  pass], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Internal server error" });
    }
    if (result.affectedRows > 0) {
      res.send({
        message: "Enregistrement réussi",
      });
    } else {
      res.send({
        message: "Echec de l'enregistrement",
      });
    }
  });
});

// CONTACT
app.post("/contact", (req, res) => {
  const pseudo = req.body.pseudo;
  const subject = req.body.subject;
  const message= req.bodymessage;

  let qr = `insert into connect (pseudo, subject, message) values (?, ?, ?)`;

  db.query(qr, [pseudo, subject, message], (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Internal server error" });
    }
    if (result.affectedRows > 0) {
      res.send({
        message: "Message envoyé",
      });
    } else {
      res.send({
        message: "Echec de l'envoi du message",
      });
    }
  });
});