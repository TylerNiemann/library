let myLibrary = [];
let container = document.getElementById('container');

function book (title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
function CreateCard(item){
    const card = document.createElement('div')
    card.classList.add('book');
    const t= document.createElement('h3');
    t.textContent = `${item.title}`;
    const a = document.createElement('h3');
    a.textContent = `${item.author}`;
    const p = document.createElement('h3');
    p.textContent = `${item.pages}`;
    const r = document.createElement('h3');
    r.textContent = `${item.read}`;
    card.appendChild(t);
    card.appendChild(a);
    card.appendChild(p);
    card.appendChild(r);
    container.appendChild(card);
}

function addBookToLibrary(title,author,pages,read){
    const bookcard = new book(title,author,pages,read);
    myLibrary.push(bookcard)
    const books = document.querySelectorAll('.book');
    books.forEach(book => container.removeChild(book));
   for(let i = 0; i < myLibrary.length; i++){
       CreateCard(myLibrary[i]);
   }
}
addBookToLibrary('Lotr','JRR',13,'read');
addBookToLibrary('apple','bear',299,'not read');
addBookToLibrary('bear','fruit',123,'read');
addBookToLibrary('car','vr',1223,'read');
console.log(myLibrary);