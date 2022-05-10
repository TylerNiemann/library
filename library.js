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
    constructor(title,author,pages,read){
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value + ' pages';
    this.read = form.read.checked;
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
    const r = document.createElement('button');
    card.appendChild(r);
    if(item.read===false) {
        r.textContent = 'Not Read';
        r.style.backgroundColor = '#e04f63';
    }else {
        r.textContent = 'Read';
        r.style.backgroundColor = '#63da63'
    }
    card.appendChild(t);
    card.appendChild(a);
    card.appendChild(p);
    const removeButton = document.createElement('button');
    card.appendChild(removeButton);
    container.appendChild(card);

    removeButton.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1)
        clearPerBook();
    });
    r.addEventListener('click', () => { 
        item.read = !item.read; 
        clearPerBook();
    }); 
}

function addBookToLibrary(){
    event.preventDefault();
    popUpForm.style.display = 'none';
    const bookcard = new Book(title,author,pages,read);
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