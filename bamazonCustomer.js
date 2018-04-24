var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Malaya10@",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connection Success!");
  showAllProducts();
});
// function to show all in-stock item id's, department, and price
var showAllProducts = function () {
  connection.query("SELECT * FROM products", function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " || " + res[i].product_name + " || " + res[i].price + "||" + res[i].stock_quantity + "\n");
    }
    console.log("-----------------------------------");
    getProductId(res);
  });
}

//   function to obtain item id
var getProductId = function (res) {
  inquirer.prompt([{
    type: "input",
    name: "choice",
    message: "What product you would like to purchase?",
  }]).then(function (answer) {
    var correct = false;
    console.log(answer)
    if (answer.choice.toUpperCase() == "Q") {
      process.exit();
    }
    // console.log(res.length)
    for (var i = 0; i < res.length; i++) {
      if (res[i].product_name == answer.choice) {
        correct = true;
        var product = answer.choice;
        var id = i;


              inquirer.prompt({
                type: "input",
                name:"quant",
                message: "How many units of this product would you like to purchase?",
                validate: function(value) {
                  if(isNaN(value) == false) {
                    return true;
                } else {
                  return false;
                }
              }
            }).then(function(answer) {
                if((res[id].stock_quantity - answer.quant) > 0) {
                  connection.query("UPDATE products SET stock_quantity ='" + (res[id].stock_quantity - answer.quant) +"' WHERE product_name = '" + product + "'", function(err, res2) {
                    console.log("Purchase Successful!");
                    showAllProducts();
                  });                  
                } else {
                  console.log("Insufficient quantity!");
                  getProductId(res);
                }
              });
          };
          if(i == res.length && correct == false) {
            console.log("Not a valid selection!");
            getProductId(res);
          }
          

  
      
    }
  })}




  