function domSearch(selector, isCaseSensitive) {
    let addControls = $('<div>').addClass('add-controls');
    let addLabel = $('<label>').text('Enter text: ');
    let addBtn = $('<a>').addClass('button').css('display', 'inline-block').text('Add')
        .on('click', function () {
            let deleteBtn=$('<a>').addClass('button').text('X')
                .on('click',function(){
                    $(this).parent().remove();
                });
            $('.items-list').append($('<li>').append(deleteBtn.get(0)).append('<strong>' + $(this).parent().find('input').val() + '</strong>'));
        });
    $('<input>').appendTo(addLabel);
    addLabel.appendTo(addControls);
    addBtn.appendTo(addControls);

    let searchControls = $('<div>').addClass('search-controls');
    let searchLabel = $('<label>').text('Search: ');
    $('<input>').on('keydown',
        function (event) {
            let textToSearch = (event.key==='Backspace'||event.key==='Delete')?$(this).val():$(this).val()+event.key;
            if (!isCaseSensitive) {
                textToSearch = new RegExp(textToSearch, 'i');
            } else {
                textToSearch = new RegExp(textToSearch);
            }

            $('.items-list li').find('strong').each((i, e) => function () {
                if (!textToSearch.test($(e).text())) {
                    $(e).parent().css('display', 'none');
                } else {
                    $(e).parent().css('display', 'block');
                }
            }());

        }).appendTo(searchLabel);
    searchLabel.appendTo(searchControls);

    let resultControls = $('<div>').addClass('result-controls');
    $('<ul>').addClass('items-list').appendTo(resultControls);

    $(selector).append(addControls);
    $(selector).append(searchControls);
    $(selector).append(resultControls);
}
