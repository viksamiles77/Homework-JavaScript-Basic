let submitBtn = document.getElementById('btn');

let book = {
    title: '',
    author: '',
    readingStatus: true,
    isRead: function () {
        return this.readingStatus ? `Already read '${this.title}' by ${this.author}.` :
            `You still need to read '${this.title}' by ${this.author}.`;
    }
};

submitBtn.addEventListener('click', function () {
    event.preventDefault();
    book.title = document.getElementById('title').value;
    book.author = document.getElementById('author').value;
    book.readingStatus = document.getElementById('readingStatus').value === 'true';

    alert(book.isRead());
})