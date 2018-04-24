# Bamazon_store

## Getting Started

- Create a MySQL Database called bamazon
    * Create a products table with the following columns 
        * item_id (unique id for each product)
        * product_name (Name of product)
        * department_name
        * price (cost to customer)
        * stock_quantity (how much of the product is available in stores)

- Run command in Terminal or Gitbash 'npm install'
- Run command in Terminal or Gitbash 'node bamazonCustomers.js
- Run 'ctrl + c' to exit each mode

### What Each JavaScript Does

1. `BamazonCustomer.js`

    * Prints the products in the store.

    * Prompts customer by asking: What product you would like to purchase?.

    * After customer's seleciton is made, customer is promped: How many units of this product would you like to purchase?

      * If there is a sufficient amount of the product in stock, the console will log: Purchase Successful!
      * However, if there is not enough of the product in stock, the console will log: Insufficient quantity!
      * If the purchase goes through, it updates the stock quantity reflecting the purchase.

-----------------------

2. `BamazonManager.js`

    * To be completed at a later time
-----------------------

3. `BamazonExecutive.js`
    * To be completed at a later time

## Demo ScreenShots (videos to come later)

* ![Screenshot1](/images/Bamazon1.PNG)
* ![Screenshot2](/images/Bamazon2.PNG)
* ![Screenshot3](/images/Bamazon3.PNG)
* ![Screenshot4](/images/Bamazon4.PNG)


## Technologies used
- Node.js
- Inquire NPM Package (https://www.npmjs.com/package/inquirer)
- MYSQL NPM Package (https://www.npmjs.com/package/mysql)

## Built With

* Visual Studio Code - Text Editor
* MySQLWorkbench
* Gitbash

## Authors

* **Samantha Olvera** - *JS/MySQL/Node.js* - [Samantha Olvera](https://github.com/smolvera)