<h2>Hey</h2>


This is a Library project from The Odin Project curriculum where a user can add their own books and the books' information will be displayed on the screen in the form of a card.


This project takes user-input about a book's information from a pop-up modal (a form) and takes the information on the form and creates it into a card which contains the book's title, author, number of pages, if it's been read or not, etc. 

Some of the challenges I faced include: (1) the book-cards enlarging when I didn't want them to enlarge, (2) being unable to remove books at the click of a button, (3) the default error messages not popping up when the form was submitted even though they had a 'required' attribute.  

(1) I learned the use of 'auto-fill' when using CSS Grid because in the beginning, when I had less than three books being displayed and there was enough room for more books, the book-cards would enlarge. But, I discovered that 'auto-fill' can help with this problem because whenever there is enough space for another book-card, the book-cards will behave as if there was another book-card occupying that space, when in fact, there is not. 

(2) The problem with the 'remove' buttons on each book-card was that once I clicked on one 'remove' buttons, the others wouldn stop working. At the time, when the 'remove' button was clicked, an eventListener would be triggered leading to that book being removed from the 'myLibrary' array, then it would display all the current books in the array. But the issue was that when it displayed the current books after removing a book, the current books no longer had an eventListener for when they are removed; Because the code in the global scope only runs once, the eventListener for removing a book only got attached once. Basically, removing one book, removed the remove eventListener on all the other books. To solve this, I added an eventListener for when a book was removed inside the display function (takes the books info, puts it in a card, and displays on screen) so that whenever I call the display function inside the remove eventListener, (which I did to show the current books after one was deleted) all the books will have a 'new' remove eventListener added. 

(3) Another problem I had was that whenever I submitted the form with blank inputs, it wouldn't show the default error messages even though the inputs had a required attribute. The reason was because I had the eventListener for when the submit button was clicked and not when the form was submitted. Because of that, after the submit button was clicked, the form would reset, the modal will close, and the book-card will be created. As a result, the form wasn't exactly 'submitting' and thus not performing its default controls. To solve it, I just changed the submit eventListener('click', ...) to a form eventListener('submit', ...). 

For future projects, I would like to add a feature to pop-up modals where if the modal is 'popped up' (it's showing) and I click outside of the modal, it will close itself. More importantly, I hope to write cleaner/more efficient code by: using function expressions instead of function declarations, lessening code in global scope, plan better by writing what I'm going to do first in English, then in pseudocode. I specifically want to improve my planning because during this project, I was just utilizing the instructions from The Odin Project, which is kind of like a plan/instructions. Improving my planning will help improve the maintainability, cleanliness, and efficiency of my code because if I have mostly everything planned out, I can create more specific functions and be able to use them together effectively. For example, each part of a car is a function/variable and they all combine to a moving/transporting vehicle. 

