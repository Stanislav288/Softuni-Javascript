function createBook(selector,bookTitle,author,bookNumber){
    let bookId=0;
    return function () {
        let book = $('<div>').attr('id',bookId++).css({'border': 'medium none'});
        $('<p>').addClass('title').text(bookTitle).appendTo(book);
        $('<p>').addClass('author').text(author).appendTo(book);
        $('<p>').addClass('isbn').text(bookNumber).appendTo(book);
        $('<button>').text('Select').on('click', function () {
            book.css('border', '2px solid blue');
        }).appendTo(book);
        $('<button>').text('Deselect').on('click', function () {
            book.css('border', 'none');
        }).appendTo(book);
        $(selector).append(book);
    }()
}