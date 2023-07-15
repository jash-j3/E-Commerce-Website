## To Start:

Clone the repo, using ```git clone https://github.com/jash-j3/E-Commerce-Website.git``` and open the terminal in the parent folder.
Then run: ```npm i --f```
After all the dependencies have been installed, run ```npm start```.

Then change the directory to the "Backend DB" folder. ```cd Backend\(DB\)/``` .
Again run, : ```npm i --f```
After all the dependencies have been installed, run ```npm start```.


Wait for a couple of seconds, till you see "Database Connection is ready...".

The site is working!

## Some details about our Web-App
The website, CartDiya is a MERN App. The database is on MongoDB Atlas. It is a kind of replicate of an E-Commerce Website. It has an asthetic homepage, profile page, login/signup facility, carts, and even payment gateway. 

## For Payment (buy a product):
For this, click on Buy Now on the product page, or add the required products to the card, and then Buy. This will redirect to the Stripe Payment Page.
Real payments have not been enabled for obvious reasons. Anyways, Stripe provides test cards to check the gateway. Here are some of the cards (successful payments) that stripe provides. You can use any of these with a valid date and CVC.
* Visa	4242424242424242
* Visa (debit)	4000056655665556
* Mastercard	5555555555554444
* Mastercard (2-series)	2223003122003222
* Mastercard (debit)	5200828282828210
* Mastercard (prepaid)	5105105105105100
* American Express	378282246310005
* American Express	371449635398431
* Discover	6011111111111117
* Discover	6011000990139424
* Discover (debit)	6011981111111113
* Diners Club	3056930009020004
* Diners Club (14-digit card)	36227206271667
* BCcard and DinaCard	6555900000604105
* JCB	3566002020360505
* UnionPay	6200000000000005
* UnionPay (debit)	6200000000000047
* UnionPay (19-digit card)	6205500000000000004


Learn more at [Stripe Test Cards Docs](https://stripe.com/docs/testing)


##  Salient Features
* Fully Functional Searchbar.
* Password protection and authentication using 10 rounds of salting and hashing using bcrypt.
* Used persistent Redux for the cart, so that the cart is saved even if the user restarts their device.
* Similarly, used persistent redux to maintain login sessions.
* Each and every product has been dynamically scraped using Selenium. ```cd Product\ Scraper/ && vi product_scrapper.py```
* Each dynamically scraped product has also been posted to the data using requests module.
* Payment gateway integrated using Stripe.
* Homepage is responsive.

## Extension
The CartDiya Extension runs only on Chrome.
* To load the extension, go to [Chrome Extensions Manager](chrome://extensions/)
* Turn on the Developer mode.
* Click on Load Unpacked and then select the Extension Folder.

The Extension is now loaded.
It can be used to,
* Search for products in the database directly from the Extension.
* Navigate to the HomePage of the website by clicking the CartDiya icon.
* Navigate to your Cart by clicking the Cart icon.
  
