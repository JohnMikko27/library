let myLibrary = [];

const body = document.querySelector('body');
const addBookButton = document.querySelector('.add');
const submit = document.querySelector('.submit')
const form = document.querySelector('form');
const cards = document.querySelector('.cards');
const content = document.querySelector('.content');
const overlay = document.querySelector('.overlay');

addBookButton.addEventListener('click', () => {
    form.classList.toggle('hidden');
    overlay.classList.toggle('active');
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read');
    if (read.checked) {
        read = 'Read';
    } else {
        read = "Not read"
    }
    
    let newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    // removes all currently displayed books and updates it
    cards.textContent = ' ';
    display();

    form.classList.toggle('hidden');
    overlay.classList.toggle('active');
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

let book1 = new Book("The Godfather", "Mario Puzo", 300, "Read");
let book2 = new Book("The Hobbit", "Somebody", 400, "Read");
let book3 = new Book("American Psycho", "Somebody2", 200, "Not read");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);    

function display() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        let title = document.createElement('div');
        let author = document.createElement('div');
        let pages = document.createElement('div');
        let readed = document.createElement('button');
        let button = document.createElement('button');
        
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        pages.textContent = `${myLibrary[i].pages} pages`;
        readed.textContent = myLibrary[i].read;
        button.textContent = 'Remove';


        if (myLibrary[i].read == 'Read') {
            readed.classList.add('green');
        } else {
            readed.classList.add('red');
        }

        // to be able to select it in css
        card.classList.add('card');
        button.classList.add('remove');
        button.dataset.number = i;
        readed.dataset.number = i;

        // reattaches eventListener after calling display() multiple times
        // fixes issue of button only working once
        readed.addEventListener('click', (e) => {
            if (e.target.textContent == 'Read') {
                myLibrary[e.target.dataset.number].read = 'Not read';
                // makes the 'card container' blank and then displays (when called) it again, updating it
                cards.textContent = ' ';
                display();
            } else {
                myLibrary[e.target.dataset.number].read = 'Read';
                cards.textContent = ' ';
                display();
            }
        })

        button.addEventListener('click', (e) => {
            myLibrary.splice(e.target.dataset.number, 1);
            cards.textContent = ' ';
            display();  
        })

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(readed);
        card.appendChild(button)


        cards.appendChild(card);
        content.appendChild(cards);
    }
}

display();



