function attachEvents() {
    let url='https://phonebook-nakov.firebaseio.com/phonebook';
    $('#btnLoad').on('click',function () {
        $.get(url+'.json',function(data, status){
            for(let element in data){
                appendLi('#phonebook',element,data[element].person,data[element].phone);
            }
        });
    });
    $('#btnCreate').on('click',function(){
        let personInput=$('#person');
        let phoneInput=$('#phone');
        let newContactJSON = JSON.stringify({
            person: $('#person').val(),
            phone: $('#phone').val()
        });

        $.post(url+'.json',newContactJSON,function(data, status){
            $('#btnLoad').trigger('click');
        },'json');

        personInput.val('');
        phoneInput.val('');
    });
    function appendLi(selector,key,person,phone){
        let deleteBtn=$('<button>').text('[Delete]').on('click',function () {
            $.ajax({url:url+'/'+key+'.json',type:'DELETE'})
                .then($(this).parent().remove());
        });
        $('<li>').text(`${person}: ${phone}`).append(deleteBtn).appendTo(selector);
    }
}
