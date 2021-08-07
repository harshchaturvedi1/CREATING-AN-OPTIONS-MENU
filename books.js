let books = []

const showBooks = () => {
    let i = 1;
    if (books.length == 0)
        console.log("---empty---")
    else {
        console.log("---Books---")
        books.forEach((Book) => {
            console.log(i++, ":", Book);
        })
    }
}

const addBooks = ({ book }) => {
    books.push(book);
    console.log('book added successfully!!!');
}

module.exports = {
    showBooks,
    addBooks
}