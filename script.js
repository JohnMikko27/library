let myLibrary = [];

const body = document.querySelector('body');
const addBookButton = document.querySelector('.add');
const submit = document.querySelector('.submit')
const form = document.querySelector('form');
const cards = document.querySelector('.cards');

addBookButton.addEventListener('click', () => {
    form.classList.toggle('hidden');
});

submit.addEventListener('click', (e) => {
    e.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    
    let newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    // removes all currently displayed books and updates it
    cards.textContent = ' ';
    display();

    form.classList.toggle('hidden');
    form.reset();
});


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}   

function addBookToLibrary(Book) {
    myLibrary.push(Book);
}

let book1 = new Book("1", "2", "3", "4");
let book2 = new Book("asdf", "adsf", "asfd", "asfd");
let book3 = new Book('3', '3', '3', '3');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);    

function display() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        let title = document.createElement('div');
        let author = document.createElement('div');
        let pages = document.createElement('div');
        let read = document.createElement('div');
        let button = document.createElement('button');
        
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;
        read.textContent = myLibrary[i].read;
        button.textContent = 'X';

        // to be able to select it in css
        card.classList.add('card');
        button.classList.add('remove');
        button.dataset.number = i;
        
        button.addEventListener('click', (e) => {
            myLibrary.splice(e.target.dataset.number, 1);
            // makes the 'card container' blank and then displays it again, updating it
            cards.textContent = ' ';
            display();  
        })

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(button)

        cards.appendChild(card);
        body.appendChild(cards);
    }
}

display();

// problem: only one remove button works, after that, the other stop working

/*document.querySelectorAll('.remove').forEach(element => element.addEventListener('click', (e) => {
    myLibrary.splice(e.target.dataset.number, 1);
    // makes the 'card container' blank and then displays it again, updating it
    cards.textContent = ' ';
    display();  
}))*/


