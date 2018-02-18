function addItem() {
    let newItemText=document.getElementById('newItemText').value;
    let newItemValue=document.getElementById('newItemValue').value;

    let option=document.createElement('option');
    option.value=newItemValue;
    option.textContent=newItemText;

    let menu=document.getElementById('menu').appendChild(option);
    document.getElementById('newItemText').value='';
    document.getElementById('newItemValue').value='';
}
