## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Start:

Clone the repo, using ```git clone https://github.com/jash-j3/E-Commerce-Website.git``` and open the terminal in the parent folder.
Then run: ```npm i --f```
After all the dependencies have been installed, run ```npm start```.

Then change the directory to the "Backend DB" folder. ```cd Backend\(DB\)/``` .
Again run, : ```npm i --f```
After all the dependencies have been installed, run ```npm start```.


Wait for 5 seconds, till you see "Database Connection is ready...".

The site is working!

## Some details about our Web-App
The website, CartDiya is a MERN App. The database is on MongoDB Atlas. It is a kind of replicate of an E-Commerce Website. It has an asthetic homepage, profile page, login/signup facility, carts, and even payment gateway. 


##  Salient Features
* Fully Functional Searchbar.
* Password protection and authentication using 10 rounds of salting and hashing using bcrypt.
* Used persistent Redux for the cart, so that the cart is saved even if the user restarts their device.
* Similarly, used persistent redux to maintain login sessions.
* Each and every product has been dynamically scraped using Selenium. ```cd Product\ Scraper/ && vi product_scrapper.py```
* Each dynamically scraped product has also been posted to the data using requests module.
* Payment gateway integrated using Stripe.
* Homepage is responsive.
* 
  
