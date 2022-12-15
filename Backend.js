const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

var mysql = require('mysql')
    var connection
    
    function kapcsolat () {
      connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'library'
      })
      connection.connect()
    }
    
    

app.use(cors())

app.use(express.static('kepek'))
app.use(express.static('konyvkep'))
app.use(express.static('irokep'))

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/kotelezo', (req, res) => {
    
    kapcsolat()
    
    connection.query('SELECT `konyv_cime`,`kp_kep` FROM `konyv_profil` WHERE `kotelezoolvasmany` = 1 ', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()


  })


  app.post('/kereso', (req, res) => {
    
    kapcsolat()
    let parancs = 'SELECT * FROM konyv_profil WHERE kotelezoolvasmany = 1 AND konyv_cime LIKE "%'+req.body.bevitel1+'%"'
    connection.query(parancs, function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()


  })




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})