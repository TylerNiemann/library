const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');

let myLibrary = [];
let container = document.getElementById('container');

class Book {
    constructor(title,author,pages){
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value + ' pages';
    }
}
function CreateCard(item){
    const card = document.createElement('div');
    card.classList.add('book');
    card.setAttribute('id', myLibrary.indexOf(item));
    const t= document.createElement('h3');
    t.textContent = `${item.title}`;
    const a = document.createElement('h3');
    a.textContent = `${item.author}`;
    const p = document.createElement('h3');
    p.textContent = `${item.pages}`;
    card.appendChild(t);
    card.appendChild(a);
    card.appendChild(p);
    const removeButton = document.createElement('button');
    card.appendChild(removeButton);
    container.appendChild(card);

    removeButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1)
        clear();
    });
}

function addBookToLibrary(){
    event.preventDefault();
    popUpForm.style.display = 'none';
    const bookcard = new Book(title,author,pages);
    myLibrary.push(bookcard)
    clearPerBook();
   form.reset();
}

function clearPerBook(){
    const books = document.querySelectorAll('.book');
    books.forEach(book => container.removeChild(book));
   for(let i = 0; i < myLibrary.length; i++){
       CreateCard(myLibrary[i]);
   }
}


console.log(myLibrary);