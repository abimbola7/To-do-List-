let texts;
todoArray = []
let tagNam = "";

btns.addEventListener("click", add)

function add() {
    texts = listtext.value;
    if (listtext.value == "") {
        alert("Your input field can't be empty")
        console.log(todoArray)
    }else{
        todoArray.push({
             list : texts,
            conditions : false,
            buttons : "Mark",
        })
        display();
        listtext.value = ""
    }
    
}

function display() {
    bodys.innerHTML = "";
    todoArray.forEach(function (element, i){
        bodys.innerHTML += 
        `<tr id="rows" ${element.conditions == false ? "style='background-color: grey'" : "style='background-color: '"}>
            <td>${i + 1}</td>
            <td>${element.list}</td>
            <td id="cond">${element.conditions == false ? "<i class='fa fa-times'></i>" : "<i class='fa fa-check'></i>"}</td>
            <td><button class="btn btn-sm btn-warning btn-hov" id="btn1" onclick="changes(${i})">${element.buttons}</button></td>
            <td><button class="btn btn-sm btn-light" onclick=del(${i})><i class="fa fa-trash"></i></button></td>
        </tr>`
    });
    localStorage.setItem('arrayLists', JSON.stringify(todoArray));
}

getNames = localStorage.getItem('arrayLists');
console.log(getNames)



function storages() {
    if (getNames) {
        todoArray = JSON.parse(getNames)
        display()
    }
}

storages()


function changes(b) {
    let todoCond = todoArray[b].conditions; 
    let rowList = document.getElementsByTagName("tr")
    if (todoCond == false) {
        todoArray[b].conditions = true;
        cond.innerHTML = todoArray[b].conditions;
        todoArray[b].buttons = "Undo";
        btn1.innerText = todoArray[b].buttons;

    } 
    
    else if (todoCond == true) {
        todoArray[b].conditions = false;
        cond.innerHTML = todoArray[b].conditions;
        todoArray[b].buttons = "Mark";
        btn1.innerText = todoArray[b].buttons;
    }
    display();
}


function del(d) {
    todoArray.splice(d, 1)
    display()
}