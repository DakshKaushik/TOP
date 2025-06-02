bookList=[
    {
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "pages": 310
    },
    {
        "title": "1984",
        "author": "George Orwell",
        "pages": 328
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "pages": 281
    },
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "pages": 180
    }
]
const bookContainer = document.querySelector('.book-container');
function BookDetails(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.info=function(){
        return `Book : ${this.title}\n
                    Author : ${this.author}\n
                    Pages : ${this.pages}`
    }
}
function renderBooks(bookObj){
    const div=document.createElement('div')
    div.textContent=bookObj.info()
    div.classList.add('book-box')
    div.style.whiteSpace ='pre-line';

    const delButton=document.createElement('button')
    delButton.textContent=`Remove`;
    delButton.classList.add('del-button');
    
    delButton.addEventListener('click', () => {
        div.remove();
    });
    div.append(delButton)
    bookContainer.append(div);
    
}
bookList.forEach(element => {
    const book=new BookDetails(element.title,element.author,element.pages)
    renderBooks(book)
});
btn=document.querySelector('.add-book-button').addEventListener('click',()=>{
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const pages=parseInt(document.querySelector('#pages').value,10)
    if (!title||!author||isNaN(pages)){
        alert('All fields are necessary')
        return
    }
    const book=new BookDetails(title,author,pages)
    renderBooks(book)
    document.querySelector('#title').value='';
    document.querySelector('#author').value='';
    document.querySelector('#pages').value='';

})

removeBtn=document.querySelector('.delButton')
removeBtn.textContent=`Change`;