# CREATING-AN-OPTIONS-MENU
install nodemon globally in your computer

create a new folder and do initialise a node project

 > add a script in your package.json that allows you to run nodemon so that you don't have to do node app.js again and again

 > You will need to create an application that shows a menu to the customer which has following options like below Press 1, 2 or 3 to do the below actions based on your selection 1 - Show all books 2 - Add a new book 3 - Quit

> when person selects 1 from the terminal then an event should be emitted which will prompt the system to return a list of all books to the customer and the options menu should be shown again

> when person selects 2 then event will be emitted which will give another input prompt to the customer that asks him to add the name of the book and then book added successfully message and the options menu should be shown again

> when 3 is pressed then an event should be emitted which will prompt the system to send a confirmation message like "Are you sure you want to quit - press Y to quit" and if the customer presses Y then the createInterface should be closed with a Bye Bye message to the customer

> If customer presses anything other then 1, 2 or 3 then an event should be emitted which will prompt the system to send a message saying "You have selected an invalid entry so please press 1, 2 or 3" and show the options menu to him
