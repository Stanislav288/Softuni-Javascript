function increment(selector) {
    let textArea=$('<textarea>').addClass('counter').val(0).attr('disabled',true);
    let incrementBtn=$('<button>').attr('id','incrementBtn').addClass('btn').text('Increment');
    let addBtn=$('<button>').attr('id','addBtn').addClass('btn').text('Add');
    let ulist=$('<ul>').addClass('results');
    let fragment=document.createDocumentFragment();

    incrementBtn.on('click',function(){
        textArea.val(Number(textArea.val())+1);
    });

    addBtn.on('click',function(){
       $('<li>').text(textArea.val()).appendTo(ulist);
    });

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    ulist.appendTo(fragment);

    $(selector).append(fragment);
}



