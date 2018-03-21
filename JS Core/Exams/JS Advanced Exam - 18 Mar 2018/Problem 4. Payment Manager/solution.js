class PaymentManager{
    constructor(title){
        this.title=title;
    }

    generateTable(){
        let table=`<table>
    <caption>${this.title} Payment Manager</caption>
    <thead>
        <tr>
            <th class="name">Name</th>
            <th class="category">Category</th>
            <th class="price">Price</th>
            <th>Actions</th>
        </tr>
   </thead>
    <tbody class="payments">
    </tbody>
    <tfoot class="input-data">
        <tr>
            <td><input name="name" type="text"></td>
            <td><input name="category" type="text"></td>
            <td><input name="price" type="number"></td>
            <td><button>Add</button></td></tr>
    </tfoot>
`;



        return table;
    }

    render(id){
        $('#'+id).append(this.generateTable());
        $('table tfoot button').on('click',
            function () {
                let inputDataRow=$(this).parent().parent();
                let name=inputDataRow.children().find("input[name='name']");
                let category=inputDataRow.children().find("input[name='category']");
                let price=inputDataRow.children().find("input[name='price']");

                let currentTable=inputDataRow.parent().parent();
                if(name.val().length===0 || category.val().length===0 || price.val().length===0){
                    return;
                }
                // console.dir(price.val().length===0);
                // if(name.val()!=='' && category.val()!=='' && price.val()!==''
                // && name.val()!=null && category.val()!=null && price.val()!=null
                //     && name.val().trim().length!=0 && category.val().trim().length!=0 && price.val().trim().length!=0){
                    currentTable.children('.payments').append(
                        $('<tr>')
                            .append($('<td>').text(name.val()))
                            .append($('<td>').text(category.val()))
                            .append($('<td>').text(Number(price.val())))
                            .append($('<td>').append(
                                $('<button>').text('Delete').on('click',
                                    function () {
                                        $(this).parent().parent().remove();})))
                    );

                //}

                name.val('');
                category.val('');
                price.val('');
            });
    }
}