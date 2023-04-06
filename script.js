const body = document.querySelector('body');

const addBookButton = document.querySelector('.add');
const submit = document.querySelector('.submit')
const form = document.querySelector('form');
const cards = document.querySelector('.cards');

let myLibrary = [];

addBookButton.addEventListener('click', () => {
    form.classList.toggle('hidden');
})

submit.addEventListener('click', (e) => {
    e.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    
    let newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    cards.textContent = ' ';
    display();
    
    form.classList.toggle('hidden');
})

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
addBookToLibrary(book1);
addBookToLibrary(book2);


function display() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        let title = document.createElement('div');
        let author = document.createElement('div');
        let pages = document.createElement('div');
        let read = document.createElement('div');

        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = myLibrary[i].pages;
        read.textContent = myLibrary[i].read;

        // to be able to select it in css
        card.classList.add('card');

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        cards.appendChild(card);
        body.appendChild(cards);
    }
}

display();

