var mainContainer = document.getElementById("main-container");
mainContainer.classList.add("main_container");

var listcontaindiv = document.createElement("div");
listcontaindiv.classList.add("list_contain_div");
mainContainer.appendChild(listcontaindiv);

var todoConatin = document.createElement("div");
todoConatin.classList.add("todo_contain");
listcontaindiv.appendChild(todoConatin);

var heading = document.createElement("h1");
var headingText = document.createTextNode("To Do List");
heading.appendChild(headingText);
todoConatin.appendChild(heading);

var input = document.createElement("input");
input.setAttribute("placeholder", "Enter Your Task");
input.setAttribute("id", "input");
input.setAttribute("onkeypress", "keyPress(event)")
todoConatin.appendChild(input);

function keyPress(key) {
    var input = document.getElementById("input");
    var inputValue = input.value;
    if (key.charCode === 13) {
        if (input.value === "") {
            input.setAttribute("placeholder", "Please Enter Your Task")
            return;
        }
        else {
            input.setAttribute("placeholder", "Enter Your Task")
        }
        var lsitItem = document.createElement("div");
        lsitItem.classList.add("list_item");
        todoConatin.appendChild(lsitItem);

        var lsitItemPara = document.createElement("p");
        var lsitItemParaText = document.createTextNode(inputValue);
        lsitItemPara.appendChild(lsitItemParaText);
        lsitItem.appendChild(lsitItemPara)

        var lsitItemTrash = document.createElement("i");
        lsitItemTrash.setAttribute("id", "item-trash")
        lsitItemTrash.setAttribute("onclick", "trash('this')")
        lsitItemTrash.setAttribute("class", "fa-solid fa-trash")
        lsitItem.appendChild(lsitItemTrash)

        input.value = "";
    }
}

function trash() {
    var trashItemsId = document.getElementById("item-trash");
    var parentELement = trashItemsId.parentNode;
    parentELement.remove()
}

