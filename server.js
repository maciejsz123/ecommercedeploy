const cors = require('cors')
const express = require('express');
const path = require('path');
var mysql = require('mysql');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

var db_config = {

};

var con;

function handleDisconnect() {
  con = mysql.createConnection(db_config);

  con.connect(function(err) {
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  con.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('listen on port', PORT);
});

app.get('/api/getproducts/:sex/:group', (req, res) => {
  let sex = req.params.sex;
  let group = req.params.group;
  let sql = `SELECT * FROM products WHERE sex = ?${ group==='viewAll' ? '' : ' AND productGroup=?'}`;
  let params = (group === 'viewAll' ? [sex] : [sex, group]);

  con.query(sql, params, (err, results, fields) => {
    res.send(results);
  });
});

app.post('/api/postproducts', (req, res) => {
  let name = req.body.name;
  let price = (req.body.price * 1).toFixed(2);
  let image = req.body.image;
  let productGroup = req.body.productGroup;
  let favorite = req.body.favorite;
  let cart = req.body.cart;
  let sex = req.body.sex;
  let discount = req.body.discount;
  let sql = "INSERT INTO products (name, price, image, productGroup, favorite, cart, sex, discount) VALUES (?,?,?,?,?,?,?,?)";
  let data = [name, price, image, productGroup, favorite, cart, sex, discount];
  con.query(sql, data, (err, result) => {
    if(err) throw err;
    return res.send("product has been added");
  });
})

app.delete('/api/deleteproducts', (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let image = req.body.image;
  let productGroup = req.body.productGroup;
  let favorite = req.body.favorite;
  let cart = req.body.cart;
  let sex = req.body.sex;
  let discount = req.body.discount;
  con.query(`DELETE FROM prodcuts where name=${name} and
    price=${price} and
    image=${image} and
    productGroup=${productGroup} and
    favorite=${favorite} and
    cart=${cart} and
    sex=${sex} and
    discount=${discount}`, (err, result) => {
      if(err) throw err;
      return res.send('product has been deleted');
  });
})

app.get('/api/getproducts/favorite', (req, res) => {
  con.query("SELECT * FROM products WHERE favorite = true", (err, results, fields) => {
    res.send(results);
  });
});

app.post('/api/postproducts/favorite', (req, res) => {
  con.query("SELECT favorite FROM products WHERE id = ?", [req.body.id], (err, results) => {
    con.query(`UPDATE products SET favorite = ${!results[0].favorite} WHERE id = ?`, [req.body.id], (err, results) => {
      if(err) throw err;
      res.send(`product with id ${req.body.id} has been changed`)
    })
  })
});

app.get('/api/getproducts/cart', (req, res) => {
  con.query("SELECT * FROM cart", (err, results, fields) => {
    res.send(results);
  });
});

app.post('/api/postproducts/cart', (req, res) => {
  let body = req.body;
  con.query(`INSERT INTO cart (name, price, image, productGroup, sex, discount, size, color) VALUES (?,?,?,?,?,?,?,?)`,
    [body.item.name, body.item.price, body.item.image, body.item.productGroup, body.item.sex, body.item.discount, body.size, body.color], (err, results) => {
    if(err) throw err;
    res.send(`product with id ${body.item.id} has beed added to cart`)
  })
});

app.delete('/api/deleteproduct/cart', (req, res) => {
  con.query('DELETE FROM cart WHERE id=?', [req.body.id], (err, results) => {
    if(err) throw err;
    res.send(`item with id ${req.body.id} has been deleted`)
  })
})

app.get('/api/getcolors', (req, res) => {
  con.query(`Select products.name, products.sex, colors.color1,
    colors.color2, colors.color2, colors.color3, colors.color4,
    colors.color5, colors.color6, colors.color7, colors.color8
    from products inner join colors ON products.name = colors.name AND products.sex = colors.sex`, (err, results) => {
      if(err) throw err;
      res.send(results);
    });
})

app.get('/api/details/:id', (req, res) => {
  con.query(`SELECT * FROM products WHERE id=${req.params.id}`, (err, results) => {
    if(err) throw err;
    res.send(results);
  });
});

// Add random colors to the table
app.post('/api/postcolors', (req, res) => {
  let values = req.body.body;
  con.query("INSERT INTO colors (name, sex, color1, color2, color3, color4, color5, color6, color7, color8) VALUES ?", [values], (err, results, fields) => {
    if(err) throw err;
    res.send("product has been added");
  });
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
