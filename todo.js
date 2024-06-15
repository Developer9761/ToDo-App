let todo = [
    {
        item: 'Ranjeet',
        duedate: '2024/05/28',
    },

    {
        item: 'Rinki',
        duedate:'2024/05/28',
    }
];

displayElement();

function addTodo() {
    let enter_Element = document.querySelector(`#input-todo`);
    let dueDate = document.querySelector(`#todoDate`);
    let todoitem = enter_Element.value;
    let dates = dueDate.value;
     

    todo.push({ item: todoitem, duedate: dates });
    enter_Element.value = '';
    dueDate.value= '';
    displayElement();
}

function displayElement() {
    let todoContainer = document.querySelector(`.todo-container`);

    //basicslly, it's a String...
    let newHtml = '';
    // paragraph.innerText = '';

    for (let i = 0; i < todo.length; i++) {
        let item = todo[i].item;
        let finalDate = todo[i].duedate;
         
        //creating new html  and change it DOM...
        newHtml += `

        <span> ${item}</span>
        <span> ${finalDate}</span>
        <button id="deletebutton" onclick="todo.splice(${i},1); displayElement();">Delete</button>
           `;
    }
    todoContainer.innerHTML = newHtml;

}
